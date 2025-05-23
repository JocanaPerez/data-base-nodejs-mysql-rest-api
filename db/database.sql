CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employes;

INSERT INTO employes VALUES
 (1,'Jop', 1000),
 (2, 'Cristop', 2000),
 (3, 'Sam', 2500),
 (4, 'max', 1500);