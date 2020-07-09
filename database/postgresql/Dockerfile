FROM postgres:12.3-alpine

COPY *.sql /docker-entrypoint-initdb.d/

RUN chmod /docker-entrypoint-initdb.d/