### setup.sh
BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

usage() {
  echo "Usage: $(basename $0) [-o <org name>] [-e <env name>] [-u <admin email>] [-p <admin password>]"
  echo "  -h | --help :                        Display usage information"
  echo "  -o | --org <orgname> :               Organisation Name"
  echo "  -e | --env <envname> :               Environment Name"
  echo "  -u | --username <adminusername> :    Admin Email"
  echo "  -p | --password <password> :         Admin Password"
  echo "  -free :         Free Org Appservices deployment"
  exit 0
}

while [ $# -gt 0 ]; do
  case "$1" in
    -o|--org)
      if [ -n "$2" ]; then
        ORG=$2
        shift
        shift
      else
        usage
      fi
    ;;
    -e|--env)
      if [ -n "$2" ]; then
        ENV=$2
        shift
        shift
      else
        usage
      fi
    ;;
    -u|--username)
      if [ -n "$2" ]; then
        ADMIN_EMAIL=$2
        shift
        shift
      else
        usage
      fi
    ;;
    -p|--password)
      if [ -n "$2" ]; then
        APW=$2
        shift
        shift
      else
        usage
      fi
    ;;
    -free)
        FREE="true"
        shift
    ;;
    -h|--help)
      usage
    ;;
    *)
      usage
  esac
done

# Fetch Env Variables
if [ -z "${DEPLOY_ENV}" ]; then
    echo "Enter Apigee Enterprise DEPLOY_ENV, followed by [ENTER]:"
    read -s -r DEPLOY_ENV
fi

if [ "${DEPLOY_ENV}" = "dev" ]; then
. ../../dev_details.sh
fi

if [ "${DEPLOY_ENV}" = "test" ]; then
. ../../test_details.sh
fi

if [ "${DEPLOY_ENV}" = "prod" ]; then
. ../../prod_details.sh
fi


if [ -z "${ORG}" ]; then
    echo "Enter Apigee Enterprise Organization, followed by [ENTER]:"
    read ORG
fi

if [ -z "${ENV}" ]; then
    echo "Enter Organization's Environment, followed by [ENTER]:"
    read ENV
fi

if [ -z "${ADMIN_EMAIL}" ]; then
    echo "Enter Apigee Enterprise LOGIN EMAIL, followed by [ENTER]:"
    read ADMIN_EMAIL
fi

if [ -z "${APW}" ]; then
    echo "Enter Apigee Enterprise PASSWORD, followed by [ENTER]:"
    read -s -r APW
fi

if [ -z "${HOST_URL}" ]; then
    echo "Enter Apigee Enterprise Management API endpoint, followed by [ENTER]:"
    read HOST_URL
fi

HOST=$ORG-$ENV.apigee.net
echo $HOST

export DEPLOY_ENV=$DEPLOY_ENV

echo "Updating proxy description"
. ../../scripts/gitinfo.sh

OPTIONS="override"

echo "Deploying API Proxy"
mvn clean install -P${ENV} -Dusername=${ADMIN_EMAIL} -Dpassword=${APW} -Dorg=${ORG} -Dhosturl=${HOST_URL} -Doptions=${OPTIONS}

echo "Finally, the setup is complete."
