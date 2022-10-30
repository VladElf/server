### Hi I'm working on my first server, with Apollo, GraphQL, with Prisma on DB Sql Server

      
## Instalation

`$ git clone https://github.com/VladElf/server.git`

`$ npm install server`


Important:  You must create a .env file  in the root directory, with url connection.  change your own data in this line of the file:

DATABASE_URL="sqlserver://localhost\instance;database=databasename;user=username;password=yourpass;trustServerCertificate=true"

## DB Script
CREATE TABLE [dbo].[Post] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Post_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [title] VARCHAR(255) NOT NULL,
    [content] NVARCHAR(1000),
    [published] BIT NOT NULL CONSTRAINT [Post_published_df] DEFAULT 0,
    [authorId] INT NOT NULL,
    CONSTRAINT [Post_pkey] PRIMARY KEY ([id])
);

CREATE TABLE [dbo].[Profile] (
    [id] INT NOT NULL IDENTITY(1,1),
    [bio] NVARCHAR(1000),
    [userId] INT NOT NULL,
    CONSTRAINT [Profile_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [Profile_userId_key] UNIQUE ([userId])
);

CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000),
    CONSTRAINT [User_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [User_email_key] UNIQUE ([email])
);

ALTER TABLE [dbo].[Post] ADD CONSTRAINT [Post_authorId_fkey] FOREIGN KEY ([authorId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE [dbo].[Profile] ADD CONSTRAINT [Profile_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

## run this command after create DB
`$ npx prisma generate`

### coud you create a pull request, your help will be great
