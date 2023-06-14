# $1 -> CONTAINER_CONFIG
# $2 -> DOMAIN
# $3 -> IDENTIFIER

# 1. Find free port > PORT
while
  FREE_PORT=$(shuf -n 1 -i 4000-6050)
  netstat -atun | grep -q "$FREE_PORT"
do
  continue
done

# 2. Start container on this port < CONTAINER_CONFIG, PORT
docker run -d -p $FREE_PORT:$FREE_PORT -e CONTAINER_CONFIG=$1 -e PORT=$FREE_PORT --name $3 gcr.io/cloud-tagging-10302018/gtm-cloud-image:stable

# 3. Prepare nginx config for this port and container < PORT, DOMAIN
cp ./nginx.conf.template ./$2
sed -i -e "s/_PORT_/$FREE_PORT/g" ./$2
sed -i -e "s/_DOMAIN_/$2/g" ./$2
sed -i -e "s/_IDENTIFIER_/$3/g" ./$2

sudo mv ./$2 /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/$2 /etc/nginx/sites-enabled/

# 4. Restart nginx
sudo systemctl reload nginx