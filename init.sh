pkill metricbeat
pkill filebeat

unzip -o metricbeat.zip
unzip -o filebeat.zip

npm update
npm install

docker-compose up --build -d