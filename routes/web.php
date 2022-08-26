<?php

use App\Http\Controllers\BeritaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [BeritaController::class, 'index'])->name('/');
Route::get('/papua', [BeritaController::class, 'Papua'])->name('papua');
Route::get('/business', [BeritaController::class, 'Business'])->name('business');
Route::get('/entertainment', [BeritaController::class, 'Entertainment'])->name('entertainment');
Route::get('/general', [BeritaController::class, 'General'])->name('general');
Route::get('/health', [BeritaController::class, 'Health'])->name('health');
Route::get('/science', [BeritaController::class, 'Science'])->name('science');
Route::get('/sports', [BeritaController::class, 'Sports'])->name('sports');
Route::get('/technology', [BeritaController::class, 'Technology'])->name('technology');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
