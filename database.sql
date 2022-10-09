CREATE TABLE "tasks" (
  "id" serial primary key,
  "task" VARCHAR (500) NOT NULL,
  "status" BOOLEAN DEFAULT false,
   "date" DATE DEFAULT NOW()
);