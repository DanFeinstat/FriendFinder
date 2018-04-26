create database friend_finder_db;

use friend_finder_db;

create table friends(
    id int auto_increment not null,
    primary key (id),
    name varchar(40) not null,
    photo varchar(200),
    s1 int(1) not null,
    s2 int(1) not null,
    s3 int(1) not null,
    s4 int(1) not null,
    s5 int(1) not null,
    s6 int(1) not null,
    s7 int(1) not null,
    s8 int(1) not null,
    s9 int(1) not null,
    s10 int(1) not null,
);

insert into friends(name, photo, s1, s2,s3,s4,s5,s6,s7,s8,s9,s10)values("Bob","test",5,1,4,4,5,1,2,5,4,1);