import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const StarterLevelSeoPackage = () => {
  const [count, setCount] = useState(1);

  const single = {
    name: "Starter Level Seo package",
    imgSrc: "/images/search-engine-optimization-services-600x370.jpg",
    price: "299.99",
    qty: count,
    id: "3",
  };
  const { name, imgSrc, price, qty, id } = single;

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };

  const dispatch = useDispatch();
  const addToCard = (options) => {
    dispatch({ type: "addToCart", payload: options });
    toast.success("Add To Cart");
    dispatch({type:"totalPrice"})
  };

  return (
    <div className="single-product-container">
      <div className="single-product-top">
        <div className="single-product-top-left">
          <div className="single-product-img">
            <img src={imgSrc} alt="" />
          </div>
        </div>
        <div className="single-product-top-right">
          <div className="single-product-heading">
            <h1>{name}</h1>
          </div>
          <div className="single-product-price">
            <p>${price}</p>
          </div>
          <div className="single-product-short-des">
            <p>
              Rank Targeting and Tracking for 50 Keywords <br />
              <br />
              Full Technical On-Page Optimization
            </p>
          </div>
          <div className="add-to-card-btns">
            <div className="count-btn">
              <button onClick={decrement}>-</button>
              <input type="number" readOnly value={qty} />
              <button onClick={increment}>+</button>
            </div>
          </div>
          <div className="cart-btn">
            <button onClick={() => addToCard({ name, imgSrc, price, qty, id })}>
              Add To Card
            </button>
          </div>
        </div>
      </div>
      <div className="single-product-buttom">
        <div className="single-product-buttom-heading">
          <h1>Description</h1>
          <h4 className="single-product-buttom-title">What is SEO?</h4>
          <p className="single-product-buttom-para">
            SEO or Search Engine Optimization refers to a strategy that digital
            marketers use to influence how their website is placed in search
            results in major search engines. Many web users use a search engine
            in order to find new websites on the web whether they are looking
            for something for entertainment or for business. SEO focuses on
            positioning a website as high as possible for search terms that are
            relevant to them.
          </p>
          <p className="single-product-buttom-para">
            To produce the search results in a search engines, the companies
            offering the search engines use spiders to “crawl” the Internet for
            websites. Regardless of the differences between each crawler and
            each search engine, this is the primary way that search engines
            learn about each website and all of the pages on that website to
            better understand what it is about.
          </p>
          <p className="single-product-buttom-para">
            Search engines use an algorithm to determine which pages have the
            most relevance and authority on a specific search term. At a surface
            level, if your page is seen as an authority on a specific topic and
            the search term is highly relevant to a page, there is a decent
            chance someone will find your website when they are searching.
          </p>
          <h4 className="single-product-buttom-title">
            How Does it Benefit Me?
          </h4>
          <p className="single-product-buttom-para">
            Search engine optimization services take the hassle away from
            business owners and webmasters in determining what needs to be done
            to rank highly in search engines. Our SEO experts continue their
            education and training even after successful campaigns to ensure
            they are always ahead of the trends when it comes to how search
            engine operators are modifying algorithms.
          </p>
          <p className="single-product-buttom-para">
            At the core level, search engine optimization means more traffic and
            more potential buyers. Good SEO means more relevant traffic and
            buyers that are more relevant. Our SEO services offer an exceptional
            SEO experience backed by experience, in-depth research, and
            continued training and education.
          </p>
          <h4 className="single-product-buttom-title">Our Core SEO Strategy</h4>
          <p className="single-product-buttom-para">
            Search engine optimization campaigns involve a variety of different
            factors that need to align in order to achieve search dominance. The
            elements that comprise our SEO strategy involve an initial analysis
            of the performance and needs of a particular website in order to
            achieve a top rating, effort placed both into and outside of the
            website, and continued re-examination of performance to ensure that
            efforts still produce results in an on-going basis.
          </p>
          <h4 className="single-product-buttom-title">Project Analysis</h4>
          <p className="single-product-buttom-para">
            Before our SEO experts begin any implementation, thorough research
            is conducted to better understand both what the client hopes to
            achieve with their website and the efforts that must be invested to
            achieve them. It takes time to plan a proper SEO strategy. We do not
            offer simple packages for SEO as we feel SEO is simply not a
            “one-size fits all” solution. What works for one website is not
            going to necessarily work for another.
          </p>
          <p className="single-product-buttom-para">
            Our SEO experts perform an in-depth analysis into the website, into
            how search engines will perceive it, and the website’s presence in
            different channels including social media, bookmarking websites, and
            online directories.
          </p>
          <h4 className="single-product-buttom-title">Competitive Research</h4>
          <p className="single-product-buttom-para">
            One of the most crucial areas when determining which strategies to
            employ in SEO involves an in-depth look at how the competition is
            performing and what the competition is doing to achieve results. At
            the end of the day SEO is a competition and the websites that rank
            high on the first page are the ones that are winning. We conduct
            research to better understand what strategies the winning pages are
            employing in order to see what the baseline performance will need to
            be to be able to rank higher than the websites that are already
            achieving prominent placement.
          </p>
          <h4 className="single-product-buttom-title">On Page Optimization</h4>
          <p className="single-product-buttom-para">
            On Page Optimization focuses on optimizing a website and all of its
            pages in order to increase the relevance and authority of the pages.
            This involves performing keyword research to understand which search
            terms are most likely to yield results. Knowing your keywords and
            ensuring your website makes smart use of them helps search engines
            know what is important about your page. It enables search engines to
            connect your page with a search term and is the core philosophy of
            SEO.
          </p>
          <p className="single-product-buttom-para">
            Our SEO experts also ensure that common mistakes are rectified. Many
            webmasters and designers will make decisions that they believe will
            positively affect SEO performance, but can actually harm it. If
            search engines feel you’re acting too strongly, they may penalize a
            particular page or an entire website. Our SEO experts understand
            what can and should be done to be in the good graces of Google and
            Bing and to avoid falling afoul of the guidelines they present for
            webmasters.
          </p>
          <h4 className="single-product-buttom-title">Off Page Optimization</h4>
          <p className="single-product-buttom-para">
            One of the strongest ways that search engines determine authority is
            by which websites interact with others and whether or not others see
            value in a website. While search engines do not publicize the
            factors they take into consideration, we continue to investigate how
            they determine authority for a website. Link building strategies,
            content marketing, and building a presence in social media are all
            ways that our SEO experts improve the off page performance of a
            website among numerous other creative strategies.
          </p>
          <h4 className="single-product-buttom-title">Reporting</h4>
          <p className="single-product-buttom-para">
            Our reporting serves as both a way to keep you apprised of the
            latest developments and achievements within your campaign and a way
            to ensure that we remain honest and transparent with all of our
            clients. We serve reports on a scheduled basis while also remaining
            in contact with our clients to ensure that we are serving their
            needs in an effective manner. We’re always available to discuss
            results and what they mean in the grand scheme of things.
          </p>
          <h4 className="single-product-buttom-title">Re-Assessment</h4>
          <p className="single-product-buttom-para">
            An SEO expert’s job is never done. As algorithms change and
            competitors invest more, it becomes crucial to remain vigilant. Our
            SEO team monitors performance closely to see what competitors are
            doing, how algorithm changes affect search placement, and how
            external factors affect performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarterLevelSeoPackage;
