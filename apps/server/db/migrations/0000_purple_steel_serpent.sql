CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"cpf2" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
