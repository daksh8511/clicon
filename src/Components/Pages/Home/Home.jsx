import React from 'react'
import BottomNav from '../../BottomNav/BottomNav'
import Banner from '../../Banner/Banner'
import Features from '../../Features/Features'
import TodayBestDeal from '../../TodayBestDeal/TodayBestDeal'
import ShopWithCategory from '../../ShopWithCategory/ShopWithCategory'
import FeaturedProduct from '../../FeaturedProduct/FeaturedProduct'
import TwoBanner from '../../TwoBanner/TwoBanner'
import BannerAd from '../../BannerAd/BannerAd'
import Product from '../../Product/Product'
import LatestNews from '../../LatestNews/LatestNews'
import Newslatter from '../../Newslatter/Newslatter'


const Home = () => {
  return (
    <div>
        <div className="container">
        <BottomNav />
        <Banner />
        <Features />
        <TodayBestDeal />
        <ShopWithCategory />
        <FeaturedProduct />
        <TwoBanner />
        <BannerAd />
        <Product />
      </div>
      <div className="bg-gray-300">
        <LatestNews />
      </div>
      <div className="bg-[#1B6392]">
        <Newslatter />
      </div>
    </div>
  )
}

export default Home