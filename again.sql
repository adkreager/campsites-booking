CREATE DATABASE booking;

CREATE TABLE t_routes (
    routeid SERIAL,
    routename VARCHAR NOT NULL,
    routedesc VARCHAR NOT NULL
)

INSERT INTO t_routes (routename, routedesc)
VALUES
('Route 1', '2 Stops'),
('Route 2', '3 Stops'),
('Route 3', '4 Stops');


CREATE TABLE t_lodgings (
    lodgingid SERIAL,
    lodgingname VARCHAR NOT NULL,
    lodgingtype VARCHAR NOT NULL
)

INSERT INTO t_lodgings (lodgingname, lodgingtype)
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
    lodgingid INT NOT NULL,
    sitenumber INT NOT NULL,
    sitename VARCHAR NOT NULL,
    sitedesc VARCHAR,
    siteprice REAL NOT NULL,
    bookdate DATE NOT NULL,
    isbooked BOOLEAN NOT NULL
)

INSERT INTO t_availability (lodgingid, sitenumber, sitname, sitedesc, siteprice, bookdate, isbooked)
VALUES 
(1, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
(1, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
(1, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
(2, 1, 'room 123', 'two twin beds', 100.00, '2020-07-11', 'FALSE'),
(2, 2, 'room 456', '1 queen, sofa bed', 150.00, '2020-07-11', 'FALSE'),
(2, 3, 'room 223', 'king bed luxury suite', 300.00, '2020-07-11', 'FALSE');
-- (3, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (3, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (3, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (4, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (4, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (4, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (5, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (5, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (5, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (6, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (6, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (6, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (7, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (7, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (7, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (8, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (8, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (8, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (9, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (9, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (9, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (10, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (10, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (10, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (11, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (11, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (11, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (12, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (12, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (12, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (13, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (13, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (13, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
-- (14, 1, 'site 1A', 'site with RV hookup', 27.00, '2020-07-11', 'FALSE'),
-- (14, 2, 'site 2A', 'site with RV hookup and tent space', 27.00, '2020-07-11', 'FALSE'),
-- (14, 3, 'site 3A', 'site with tent space, electricity', 27.00, '2020-07-11', 'FALSE'),
