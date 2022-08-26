<?php

namespace App\Http\Controllers;

use App\Models\berita;
use Illuminate\Http\Request;
use Inertia\Inertia;







class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->API_KEY = "1f79ea6f23eb4bdeabce8fdaba88d328";
        $this->COUNTRY = "id";
    }

    public function index()
    {

        $headline = $this->HeadlineNews();
        $technology = $this->getCategoryNews("technology");
        $business = $this->getCategoryNews("business");
        $entertainment = $this->getCategoryNews("entertainment");
        $general = $this->getCategoryNews("general");
        $health = $this->getCategoryNews("health");
        $science = $this->getCategoryNews("science");
        $sports = $this->getCategoryNews("sports");
        $popularity = $this->getNewsPopularity();


        return Inertia::render('Home', [
            'title' => 'Home',
            'newsapi' => $headline,
            'technology' => $technology,
            'business' => $business,
            'entertainment' => $entertainment,
            'general' => $general,
            'health' => $health,
            'science' => $science,
            'sports' => $sports,
            'popularity' => $popularity,
        ]);
    }

    private function HeadlineNews()
    {
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', 'https://newsapi.org/v2/top-headlines?country=' . $this->COUNTRY . '&apiKey=' . $this->API_KEY);  // 'application/json; charset=utf8'
        $berita =  $response->getBody();
        $data = json_decode($berita, true);
        return $data;
    }

    private function getCategoryNews($category)
    {
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', 'https://newsapi.org/v2/top-headlines?country=' . $this->COUNTRY . '&apiKey=' . $this->API_KEY . '&category=' . $category);  // 'application/json; charset=utf8'
        $berita =  $response->getBody();
        $data = json_decode($berita, true);
        return $data;
    }

    private function getNewsPopularity()
    {
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', 'https://newsapi.org/v2/everything?q=technology&from=2022-08-25&to=2022-08-25&sortBy=popularity&apiKey=' . $this->API_KEY);  // 'application/json; charset=utf8'
        $berita =  $response->getBody();
        $data = json_decode($berita, true);
        return $data;
    }

    private function getNewsPopularityByCategory($category)
    {
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', 'https://newsapi.org/v2/everything?q=' . $category . '&from=2022-08-25&to=2022-08-25&sortBy=popularity&apiKey=' . $this->API_KEY);  // 'application/json; charset=utf8'
        $berita =  $response->getBody();
        $data = json_decode($berita, true);
        return $data;
    }


    public function Papua()
    {
        return Inertia::render('Papua', [
            'title' => 'Terkini Papua',
        ]);
    }

    public function Business()
    {
        $business = $this->getCategoryNews("business");
        $popularity = $this->getNewsPopularityByCategory("business");
        return Inertia::render('Business', [
            'title' => 'Business',
            'category' => $business,
            'popularity' => $popularity,
        ]);
    }

    public function Entertainment()
    {
        $entertainment = $this->getCategoryNews("entertainment");
        $popularity = $this->getNewsPopularityByCategory("entertainment");
        return Inertia::render('Entertainment', [
            'title' => 'Entertainment',
            'category' => $entertainment,
            'popularity' => $popularity,
        ]);
    }
    public function General()
    {
        $general = $this->getCategoryNews("general");
        $popularity = $this->getNewsPopularityByCategory("general");
        return Inertia::render('General', [
            'title' => 'General',
            'category' => $general,
            'popularity' => $popularity,
        ]);
    }

    public function Health()
    {
        $health = $this->getCategoryNews("health");
        $popularity = $this->getNewsPopularityByCategory("health");
        return Inertia::render('Health', [
            'title' => 'Health',
            'category' => $health,
            'popularity' => $popularity,
        ]);
    }
    public function Science()
    {
        $science = $this->getCategoryNews("science");
        $popularity = $this->getNewsPopularityByCategory("science");
        return Inertia::render('Science', [
            'title' => 'Science',
            'category' => $science,
            'popularity' => $popularity,
        ]);
    }
    public function Sports()
    {
        $sports = $this->getCategoryNews("sports");
        $popularity = $this->getNewsPopularityByCategory("sports");
        return Inertia::render('Sports', [
            'title' => 'Sports',
            'category' => $sports,
            'popularity' => $popularity,
        ]);
    }
    public function Technology()
    {
        $technology = $this->getCategoryNews("technology");
        $popularity = $this->getNewsPopularityByCategory("technology");
        return Inertia::render('Technology', [
            'title' => 'Technology',
            'category' => $technology,
            'popularity' => $popularity,
        ]);
    }




    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function show(berita $berita)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function edit(berita $berita)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, berita $berita)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function destroy(berita $berita)
    {
        //
    }
}
