CREATE DATABASE campsites;

CREATE TABLE t_routeList (
	routeId SERIAL,
	routeName VARCHAR NOT NULL,
	routeDesc VARCHAR NOT NULL,
	PRIMARY KEY (routeId)
);

INSERT INTO t_routeList (routeName) 
VALUES ('Route 1', '3-day, 2-night'),
('Route 2', '4-day, 3-night'),
('Route 3', '5-day, 4-night');

-- CREATE TABLE t_campsites (
-- 	campsiteId SERIAL,
-- 	campsiteName VARCHAR(50) NOT NULL,
-- 	PRIMARY KEY (campsiteId)
-- );

-- INSERT INTO t_campsites (campsiteName)
-- VALUES ('Madison'),
-- ('Old Faithful'),
-- ('Grant Village'),
-- ('Museum'),
-- ('Indian Creek'),
-- ('East Entrance'),
-- ('Lake Village'),
-- ('Canyon Village'),
-- ('Tower Fall'),
-- ('Pebble Creek');

CREATE TABLE t_campsites (
	campsiteId SERIAL,
	campsiteName VARCHAR(50) NOT NULL,
	campsiteType VARCHAR NOT NULL,
	price REAL NOT NULL,
	PRIMARY KEY (campsiteId)
);

INSERT INTO t_campsites (campsiteName, campsiteType, price)
VALUES 
('Madison Campground', 'campground'), --Madison
('Canyon Lodge & Cabins', 'hotel', ), --Canyon Village
('Canyon Campground', 'campground'), --Canyon Village
('Moran Lodge', 'hotel'), --Canyon Village
('Old Faithful Inn', 'hotel'), --Old Faithful
('Old Faithful Lodge', 'hotel'), --Old Faithful
('Old Faithful Snow Lodge', 'hotel'), --Old Faithful
('Grant Village Lodge', 'hotel'), --Grant Village
('Grant Village Campground', 'campground'), --Grant Village
('Lake Village Lodge & Cabins', 'hotel'), --Lake Village
('Pahaska Tepee Resort', 'hotel'), -- Pahaska Tepees
('Roosevelt Lodge & Cabins', 'hotel'), --Tower Fall
('Tower Fall Campground', 'campground'), --Tower Fall
('Norris Campground', 'campground') --Museum

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