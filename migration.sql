CREATE DATABASE campgrounds;

CREATE TABLE t_routeList (
	routeId SERIAL,
	routeName VARCHAR NOT NULL,
	PRIMARY KEY (routeId)
);

INSERT INTO t_routeList (routeName) 
VALUES ('3-day, 2-night'),
('4-day, 3-night'),
('5-day, 4-night');

CREATE TABLE t_campsites (
	campsiteId SERIAL,
	campsiteName VARCHAR(50) NOT NULL,
	PRIMARY KEY (campsiteId)
);

INSERT INTO t_campsites (campsiteName)
VALUES ('Madison'),
('Old Faithful'),
('Grant Village'),
('Museum'),
('Indian Creek'),
('East Entrance'),
('Lake Village'),
('Canyon Village'),
('Tower Fall'),
('Pebble Creek');

CREATE TABLE t_availability (
	campsiteId INT NOT NULL,
	bookDate DATE NOT NULL,
	isBooked BOOLEAN DEFAULT 'FALSE',
	PRIMARY KEY (campsiteId, bookDate)
);

INSERT INTO t_availability (campsiteId, bookDate, isBooked)
VALUES
(1, '2019-07-11', 'FALSE'),
(7, '2019-07-11', 'FALSE'),
(2, '2019-07-12', 'FALSE'),
(4, '2019-07-12', 'FALSE'),
(8, '2019-07-12', 'FALSE'),
(3, '2019-07-13', 'FALSE'),
(9, '2019-07-13', 'FALSE'),
(10, '2019-07-14', 'FALSE');


CREATE TABLE t_routeInfo (
	routeId INT NOT NULL,
	dayNumber INT NOT NULL,
	campsiteId INT NOT NULL,
	description VARCHAR,
	PRIMARY KEY (routeId, dayNumber)
);

INSERT INTO t_routeInfo (routeId, dayNumber, campsiteId, description)
VALUES (1, 1, 1, 'Madison Campground, night 1 of 2'),
(1, 2, 4, 'Museum Campground, night 2 of 2'),
(2, 1, 1, 'Madison Campground, night 1 of 3'),
(2, 2, 2, 'Old Faithful, night 2 of 3'),
(2, 3, 3, 'Grant Village, night 3 of 3'),
(3, 1, 7, 'Lake Village, night 1 of 4'),
(3, 2, 8, 'Canyon Village, night 2 of 4'),
(3, 3, 9, 'Tower Fall, night 3 of 4'),
(3, 4, 10, 'Pebble Creek, night 4 of 4');