<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    // /**
    //  * Define the model's default state.
    //  *
    //  * @return array
    //  */
    public function definition()
    {
        return [
            'product_code' => $this->faker->regexify('[A-Za-z0-9]{50}'),
            'product_name' => $this->faker->sentence(2, true),
            'product_description' => $this->faker->paragraph(1, true),
            'product_price' => $this->faker->randomFloat(2, 0, 100)
        ];
    
    }
}

