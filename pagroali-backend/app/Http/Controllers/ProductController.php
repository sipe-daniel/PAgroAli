<?php

namespace App\Http\Controllers;

use App\Http\Resources\Prodct as ResourcesProduct;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $products = Product::all();

       return $products->toJson(JSON_PRETTY_PRINT);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_code' => 'required',
            'product_name' => 'required',
            'product_description' => 'required',
            'product_price' => 'required',
        ]);
        if(Product::create($request->all())){
            return response()->json([
                'success' => 'Produit modifié avec succès'
            ], 200);
        }
    }

      /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        $product = Product::find($id);
        if (is_null($product)) {
            return response()->json('Pas de donnée trouvée', 404); 
        }
        return $product;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product, $id)
    {
        $product = Product::find($id);
        if($product->update($request->all())){
            return response()->json([
                'success' => 'Produit modifié avec succès'
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Product::destroy($id)){
            return response()->json([
                'success' => 'Produit supprimé avec succès'
            ], 200);
        }
    }

     /**
     * Search for a product_name
     *
     * @param  str  $product_name
     * @return \Illuminate\Http\Response
     */
    public function search($product_name)
    {
        return Product::where('product_name', 'like', '%'.$product_name.'%')->get();
    }
}
