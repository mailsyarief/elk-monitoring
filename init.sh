pkill metricbeat
pkill filebeat
pkill apm-server

unzip -o metricbeat.zip
unzip -o filebeat.zip
unzip -o apm-server.zip

echo "update npm....."

npm update
npm install

docker-compose up --build -d