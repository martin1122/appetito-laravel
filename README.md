Backend for Appetito

To install follow these steps:

1. clone project into your local machine with `git clone {url}`
2. enter folder via command `cd {package-name}`
3. install composer packages via `composer install`, this will put `vendor` folder with installed packages
4. create database in your local machine;
5. copy example env to `.env` via command `cp .env.example .env`
6. edit `.env` with configurations you have(app name, database credentials ...)
7. now, generate key `php artisan key:generate`
8. `php artisan serve` to run server
9. `php artisan passport:install` to install Laravel Passport clients
10. If production, `php artisan passport:keys`

Package instructions:
1. spatie/laravel-permission for role & permissions
    a) publish necessary migrations via
        `php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="migrations"` 
    b) `php artisan migrate`
    c) You can publish the config file with:
       `php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="config"`
  
  #####Usage
  
  1. Translation:
       
     * ```$model->translations``` - to get all translations of a model
     * ```$model->translation($field, $locale)``` - to get translation of an attribute of a model
     example,
     ```$recipe->translation('name','en')```- will retrieve name of the recipe in "english"
  2. Queue:
     #####To install beanstalkd
     sudo apt-get install beanstalkd
     
     #####To install supervisor
     sudo apt-get install supervisor
     
     #####create worker
     cd /etc/supervisor/conf.d
     sudo touch laravel-worker.conf
     
     #####paste inside this
     ```
     [program:laravel-worker]
     process_name=%(program_name)s_%(process_num)02d
     command=php /var/www/html/coolinary/artisan queue:work beanstalkd --sleep=3 --tries=3
     autostart=true
     autorestart=true
     user=deployer
     numprocs=8
     redirect_stderr=true
     stdout_logfile=/var/www/html/coolinary/storage/logs/workers.log
     ```
     #####Starting Supervisor
     sudo supervisorctl reread
     sudo supervisorctl update
     sudo supervisorctl start laravel-worker
