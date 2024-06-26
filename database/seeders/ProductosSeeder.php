<?php

namespace Database\Seeders;

use App\Models\Productos;
use Database\Factories\ProductosFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            Productos::factory(10)->create();
    }
}
