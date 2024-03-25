Drop table Mortality_data
Drop table Visitor_data
Create Table Visitor_data(
	ParkName varchar,
	_2007 varchar,
	_2008 varchar,
	_2009 varchar,
	_2010 varchar,
	_2011 varchar,
	_2012 varchar,
	_2013 varchar,
	_2014 varchar,
	_2015 varchar,
	_2016 varchar,
	_2017 varchar,
	_2018 varchar,
	_2019 varchar,
	_2020 varchar,
	_2021 varchar,
	_2022 varchar,
	_2023 varchar,
	Average varchar
);
Create Table Mortality_data(
	index int,
	ParkName varchar,
	Year int,
	Num_deaths int);
