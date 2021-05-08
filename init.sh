unzip metricbeat.zip
unzip filebeat.zip
npm update
npm install
docker-compose up --build -d
cd metricbeat
./metricbeat setup
nohup ./metricbeat -e &
cd ..
cd filebeat
./filebeat setup
nohup ./filebeat -e &