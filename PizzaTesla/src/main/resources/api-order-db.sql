drop database if exists apiorderdb;
create database apiorderdb;
use apiorderdb;
drop table if exists pizzaorder;
create table `order`(
    `id` int auto_increment not null primary key,
    `timestamp` varchar(10) not null,
    `username` varchar(50) not null,
    `status` varchar(10) not null,
    `quantity` int not null,
    `cost` double not null
);
insert into `order`(`timestamp`, `username`, `status`, `quantity`, `cost`) values
("20-11-2023", "pepeloc", "pendiente", 2, 40),
("21-11-2023", "sanyutu", "listo", 3, 80),
("22-11-2023", "lolofu", "anulado", 4, 120);