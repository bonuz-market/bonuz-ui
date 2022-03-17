#!/bin/bash

## display help

function help(){
  echo 'usage: ./versioning.sh [-rc|--release] [-d|--develop] [-l|--master]'
  echo '                      [-m|--major] [-i|--minor] [-p|--patch]'
  echo '                      [--default] [--manual] [-h|--help]'
  echo ''
  echo 'Switches:'
  echo '  --master            setup data for live release, no suffix, -l'
  echo '  --develop           setup data for develop, uses SNAPSHOT-DATETIME_UTC suffix, -d'
  echo '  --release           setup data for a rc, uses RC.x suffix -rc'
  echo '  --major             increment MAJOR version part, -m'
  echo '  --minor             increment MINOR version part, -i'
  echo '  --patch             increment PATCH version part, -p'
  echo '  --revision          increment REVISION version part, -e'
  echo '  --default           increment PATCH version part per default'
  echo '  --manual            step by step building version tag'
  echo '  --apply             GIT command to apply version tag'
  echo ''
  echo 'Version: MAJOR.MINOR.PATCH[[-STAGESUFFIX][-TIMESTAMP]]'
  echo ''
  echo 'Reference:'
  echo '  http://semver.org/'
  echo ''
  echo 'Versions priority:'
  echo '  1.0.0-SNAPSHOT-'$(date -u +%Y%m%d%H%M%S)' < 1.0.0-RC.1 < 1.0.0'
  exit 0
}

# fetches version number from repository
function fetchVersion() {
  git fetch --tags
  if [ $(git describe --tags --abbrev=0) ]
  then
    git_tag=$(git describe --tags --abbrev=0)
  else
    # If no tags detected on the origin, set this following default tag format as a start
    git_tag=$default_git_tag
    echo "no tags defined in repo, using default for $ENV: $git_tag"
  fi
}
# increment major version, resets 'minor' and 'patch' to 0
function major() {
  tag_string=$(echo $git_tag | cut -d "-" -f1)
   IFS='.' read -a tag_split <<< "${tag_string}"
  bumped_major_vers=$((tag_split[0]+1))
  tag_increment="$bumped_major_vers.0.0"
  tag_generator="$tag_increment"
}

# increment minor version, always reset 'patch' to 0
function minor() {
  tag_string=$(echo $git_tag | cut -d "-" -f1)
  IFS='.' read -a tag_split <<< "${tag_string}"
  bumped_minor_vers=$((tag_split[1]+1))
  tag_increment="${tag_split[0]}.$bumped_minor_vers.0"
  tag_generator="$tag_increment$tag_suffix-$TIMESTAMP"
}

# put it into array, trim, split, increment the last build no ONLY, add <date>
function patch() {
  tag_string=$(echo $git_tag | cut -d "-" -f1)
  IFS='.' read -a tag_split <<< "${tag_string}"
  bumped_patch_vers=$((tag_split[2]+1))
  tag_increment="${tag_split[0]}.${tag_split[1]}.$bumped_patch_vers"
  tag_generator="$tag_increment$tag_suffix-$TIMESTAMP"
}

# should increment the release candidate number only
function release() {
   if [ $newRC = "Y" ]
    then
      startRelease
    else
    # this should leave out the -RC suffix part and be something like 1.5.2
    tag_release_array=$(echo $git_tag | cut -d "-" -f1)
    tag_split=(${tag_release_array//./ })
    # here we take care of the -RC suffix instead
    tag_revision_array=$(echo $git_tag | cut -d "-" -f2)
    # since in release candidate we only bump the rc revision (like from rc.1 to rc.2)
    tag_revision_split=(${tag_revision_array//./ }) && ((tag_split[1]++))
    tag_generator="${tag_release_array[*]}-RC.${tag_revision_split[1]}"
  fi
}
# generates a new M.M.P-RC.1 tag string
function startRelease() {
   # this should leave out any suffix we might have as latest tag
  tag_string=$(echo $git_tag | cut -d "-" -f1)
  #echo "${tag_string[*]}"
  IFS='.' read -a tag_split <<< "${tag_string}"
  #echo ${tag_split[*]}
  tag_generator="${tag_split[0]}.${tag_split[1]}.${tag_split[2]}-RC.1"
  #echo $tag_generator
}

# performs the actual tagging if confirmed
function update() {
  vMajor=$(echo ${tag_split[0]})
  vMinor=$(echo ${tag_split[1]})
  vPatch=$(echo ${tag_split[2]})
  vSuffix=$(echo $tag_suffix)
  echo "The latest (fetched from remote) TAG id           : $git_tag"
  echo "The proposed new version TAG is                   : $tag_generator"
  read -p "Happy with the above (sugested) tag (Y/N)         ? " confirm
  if [ $confirm = "N" ]
  then
    echo
    echo "Okay, your're not happy. Lets alter it! Simply press enter to accept the suggested value"
    read -e -p "Major version: " -i $vMajor major
    read -e -p "Minor version: " -i $vMinor minor
    read -e -p "Patch version: " -i $vPatch patch
    read -e -p "Suffix: " -i $vSuffix tag_suffix
    tagging_manual="$major.$minor.$patch$tag_suffix"
    read -p "Do you want to include a timestamp as suffix for this version? [Y/N] " -i $TIMESTAMP includeTimestamp
    read -p "Your TAG message (optional)? " tagging_message
    if [ $includeTimestamp = "Y" ]
      then
        tagging_manual="$major.$minor.$patch$tag_suffix-$TIMESTAMP"
    fi
    echo
    echo "Alright, The new version TAG is $tagging_manual"
    echo
    read -p "Please confirm to proceed, I accept [Y/N] for your answer: " confirmC
    case $confirmC in
      Y)
      echo
      git tag -a $tagging_manual -m "$tagging_message"
      echo "Okay, your latest commit has been succesfully tagged"
      ;;
      N)
      echo "You didn't pressed Y to confirm. The script is exiting now"
      exit
      ;;
      *)
      echo "Sorry, invalid input, exiting now"
      ;;
    esac
  else
	  read -p "Alright, let's add a TAG message (optional)       : " tagging_message
    echo
    echo "Awesome! Adding the proposed version TAG now..."
    echo
    git tag -a $tag_generator -m "$tagging_message"
    echo "Completed!"
  fi
}

# asks for manual building of tag
function manualUpdate() {
  tag_string=$(echo $git_tag | cut -d "-" -f1)
  #echo "${tag_string[*]}"
  IFS='.' read -a tag_split <<< "${tag_string}"
  vMajor=$(echo ${tag_split[0]})
  vMinor=$(echo ${tag_split[1]})
  vPatch=$(echo ${tag_split[2]})
  vSuffix=$(echo $tag_suffix)
  echo "The latest (fetched from remote) TAG id           : $git_tag"
  echo "Okay, Lets create a new tag. Simply press enter to accept the suggested value"
    read -e -p "Major version: " -i $vMajor major
    read -e -p "Minor version: " -i $vMinor minor
    read -e -p "Patch version: " -i $vPatch patch
    read -e -p "Suffix: " -i $vSuffix tag_suffix
    read -p "Do you want to include a timestamp as suffix for this version? [Y/N] " -i $TIMESTAMP includeTimestamp
    read -p "Your TAG message (optional)? " tagging_message
    tagging_manual="$major.$minor.$patch$tag_suffix"
    if [ $includeTimestamp = "Y" ]
      then
        tagging_manual="$major.$minor.$patch$tag_suffix-$TIMESTAMP"
    fi
    echo
    echo "Alright, The new version TAG is $tagging_manual"
    echo
    read -p "Please confirm to proceed, I accept [Y/N] for your answer: " confirmC
    case $confirmC in
      Y)
      echo
      git tag -a $tagging_manual -m "$tagging_message"
      echo "Okay, your latest commit has been succesfully tagged"
      ;;
      N)
      echo "You didn't pressed Y to confirm. The script is exiting now"
      exit
      ;;
      *)
      echo "Sorry, invalid input, exiting now"
      ;;
    esac
}

set -e

TYPE='patch'
# parse input parameters
for i in "$@"
do
  key="$i"

  case $key in
    -d|--develop)
    ENV='develop'               # develop
    tag_suffix="-SNAPSHOT"
    default_git_tag="0.0.0$tag_suffix"
    ;;
    -rc|--release)               # RELEASE
    ENV='release'
    TYPE='release'
    tag_suffix="-RC.0"
    default_git_tag="0.0.0$tag_suffix"
    ;;
    -l|--master)
    ENV='master'
    tag_suffix=''
    default_git_tag="0.0.0"
    ;;
    -p|--patch)                 # increment of PATCH
    TYPE='patch'
    ;;
    -i|--minor)                 # increment of MINOR by default
    TYPE='minor'
    ;;
    -m|--major)                 # increment of MAJOR
    ;;
     --default)                 # stay on the same stage, but increment only last found PART of version code
    TYPE='patch'
    ;;
    --manual)
    TYPE='manual'
    tag_suffix="-SNAPSHOT"
    default_git_tag="0.0.0$tag_suffix"
    ;;
    -h|--help)
    help
    ;;
    *)
    echo "Usage: bash versioning.sh --help"
    exit 1
  esac
  shift
done


TIMESTAMP=`date -u +%Y%m%d%H%M%S`

#read -p 'Choose the environment {develop,release,master}: ' ENV
#read -p 'Choose which version you want to increment {major|minor|patch|release|manual}: ' TYPE
# if type is release, one more question so we know that we are starting a new release
if [ $TYPE = "release" ]
  then
    read -p 'Is this a new release candidate: [Y/N] ? ' newRC
fi

# buildDefaults

fetchVersion
case $TYPE in
  major)
    echo "New MAJOR version will be bumped"
    major
    update
    ;;

  minor)
    echo "New MINOR version will be bumped"
    minor
    update
    ;;

  patch)
    echo "Current version PATCH part will be bumped"
    patch
    update
    ;;

  release)
    echo "Release Candidate version will be bumped"
    release
    update
    ;;

  manual)
    echo "Version tag will be created manually"
    manualUpdate
    ;;

  *)
    echo "Usage: bash versioning.sh"
    exit 1
esac
exit 0