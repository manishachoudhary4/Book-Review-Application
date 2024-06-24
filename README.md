
# Book Review Application Setup Instructions

## Instructions to Run the Book Review Application

1. **Clone the Repository and Navigate to the Project Directory:**
   - Download or clone the repository to your local machine.
   - Navigate to the project directory.

2. **Backend Setup:**

   1. **Create and Activate Virtual Environment:**
      ```sh
      cd book-review-app/backend
      python3 -m venv venv
      source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
      ```

   2. **Install Dependencies:**
      ```sh
      pip install -r requirements.txt
      ```

   3. **Database Configuration:**
      - Update the `config.py` or equivalent configuration file to use an online database (like PostgreSQL on Heroku or AWS RDS). Example configuration for PostgreSQL:
        ```python
        SQLALCHEMY_DATABASE_URI = 'postgresql://username:password@host:port/dbname'
        ```

   4. **Run Database Migrations:**
      ```sh
      flask db upgrade
      ```

   5. **Start the Backend Server:**
      ```sh
      flask run
      ```

3. **Frontend Setup:**

   1. **Navigate to Frontend Directory:**
      ```sh
      cd ../frontend
      ```

   2. **Install Dependencies:**
      ```sh
      npm install
      ```

   3. **Start the Frontend Server:**
      ```sh
      npm start
      ```

## Using Online Database

To avoid the need for local database setup on the evaluator's machine, you can configure the application to use an online database service. Here are steps to use a PostgreSQL database hosted on Heroku:

1. **Create a Heroku Account** and install the Heroku CLI.
2. **Create a New Heroku Application:**
   ```sh
   heroku create your-app-name
   ```

3. **Add Heroku Postgres to Your Application:**
   ```sh
   heroku addons:create heroku-postgresql:hobby-dev
   ```

4. **Get the Database URL:**
   ```sh
   heroku config
   ```

5. **Update `config.py` with the Heroku Postgres URL:**
   ```python
   SQLALCHEMY_DATABASE_URI = 'Your_Heroku_Postgres_URL'
   ```

6. **Deploy the Application to Heroku:**
   - Commit your changes and push to Heroku:
     ```sh
     git add .
     git commit -m "Configured for Heroku"
     git push heroku main
     ```

7. **Run Database Migrations on Heroku:**
   ```sh
   heroku run flask db upgrade
   ```

## Optional: Hosting the Application

To host the application for easier evaluation:

1. **Deploy Backend to Heroku:**
   - Follow the steps above for setting up Heroku.
   - Ensure the backend is correctly configured and running on Heroku.

2. **Deploy Frontend to Vercel/Netlify:**
   - Install Vercel or Netlify CLI and login.
   - Build the frontend application:
     ```sh
     npm run build
     ```
   - Deploy to Vercel or Netlify:
     ```sh
     vercel deploy
     # or
     netlify deploy
     ```

