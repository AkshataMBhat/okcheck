
CREATE TABLE UserDetails(
	userid int constraint userid_pk primary key IDENTITY(1000,1) ,
	[name] varchar(15) ,
	dob date ,
	email varchar(15) not null ,
	phone varchar(15) not null,
	address_d varchar(50) ,
	username varchar(15) ,
	pwd varchar(10) ,
	active_status bit
)

create table Emi_Card(
cid int constraint cid_pk primary key IDENTITY(2000,1),
userid int constraint userid_fk foreign key references UserDetails(userid) on update cascade on delete cascade,
card_no varchar(15) ,
card_type varchar(10),
bank_name varchar(15),
acc_no varchar(15) ,
ifsc varchar(10),
pan varchar(10),
card_limit int,
exp_date date
)

create table Admin_d(
emp_id int constraint empid_pk primary key IDENTITY(3000,1),
emp_name varchar(10),
contact varchar(15)
)

create table Product(
pid int constraint pid_pk primary key IDENTITY(4000,1),
pname varchar(10),
category varchar(15),
price int,
stock int,
pimage varchar(15)
)


create table Orders(
oid int constraint oid_pk primary key IDENTITY(5000,1),
pid int constraint pid_fk foreign key references Product(pid) on update cascade on delete cascade, 
qty int,
t_amt int,
no_of_inst int,
cost_per_inst int
)



create table Transaction_d(
tid int constraint tid_pk primary key IDENTITY(6000,1),
cid int constraint cid_fk foreign key references Emi_Card(cid) on update cascade on delete cascade,
oid int constraint oid_fk references Orders(oid) on update cascade on delete cascade,
t_date date
)



create table Emi_Inst
(
Emi_Id int constraint Emi_Id_pk primary key IDENTITY(7000,1),
tid int constraint tid_fk foreign key references Transaction_d(tid) on update cascade on delete cascade,
Upc_inst_date date,
Inst_due int,
inst_paid int
)
