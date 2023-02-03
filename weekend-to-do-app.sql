CREATE TABLE "tasks" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(120) NOT NULL, 
    "complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "tasks" ("name", "complete")
VALUES 
	('Weekend Challenge', 'N'),
    ('Recover from Covid', 'Y');