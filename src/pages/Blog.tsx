import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "What to Do When Your Car Breaks Down on NH44",
      excerpt: "Complete safety guide for car breakdowns on NH44 highway. Step-by-step emergency procedures and safety tips.",
      category: "Highway Safety",
      date: "2024-01-15",
      readTime: "7 min read",
      author: "Hussain Towing Team",
      slug: "/blog/breakdown-nh44-safety-guide",
      link: "/blog/breakdown-nh44-safety-guide"
    },
    {
      id: 2,
      title: "Towing Service Costs in Andhra Pradesh - Complete Guide 2024",
      excerpt: "Complete guide to towing service costs in Andhra Pradesh. Compare rates, understand pricing factors, and get transparent quotes.",
      category: "Towing Guide",
      date: "2024-01-10",
      readTime: "9 min read",
      author: "Hussain Towing Team",
      slug: "/blog/towing-costs-andhra-pradesh-guide",
      link: "/blog/towing-costs-andhra-pradesh-guide"
    },
    {
      id: 3,
      title: "Common Causes of Vehicle Breakdowns in Nandyal Region",
      excerpt: "Understanding the most frequent vehicle issues in our service area and how to prevent them.",
      category: "Maintenance",
      date: "2024-01-05",
      readTime: "6 min read",
      author: "Hussain Towing Team",
      slug: "common-breakdown-causes",
      link: "#"
    },
    {
      id: 4,
      title: "Monsoon Driving Safety Tips for Andhra Pradesh",
      excerpt: "Stay safe during monsoon season with these essential driving tips for wet weather conditions.",
      category: "Seasonal Safety",
      date: "2023-12-28",
      readTime: "8 min read",
      author: "Hussain Towing Team",
      slug: "monsoon-driving-safety",
      link: "#"
    },
    {
      id: 5,
      title: "How to Choose a Reliable Towing Service",
      excerpt: "Key factors to consider when selecting a professional towing company for your vehicle transport needs.",
      category: "Towing Guide",
      date: "2023-12-20",
      readTime: "5 min read",
      author: "Hussain Towing Team",
      slug: "choose-reliable-towing",
      link: "#"
    },
    {
      id: 6,
      title: "Understanding Towing Regulations in Andhra Pradesh",
      excerpt: "Know your rights and responsibilities when it comes to vehicle towing and recovery services.",
      category: "Legal Guide",
      date: "2023-12-15",
      readTime: "9 min read",
      author: "Hussain Towing Team",
      slug: "towing-regulations-ap",
      link: "#"
    }
  ];

  const categories = ["All", "Safety Tips", "Highway Safety", "Maintenance", "Seasonal Safety", "Towing Guide", "Legal Guide"];

  return (
    <>
      <Helmet>
        <title>Towing & Roadside Safety Blog - Hussain Towing Services Nandyal</title>
        <meta name="description" content="Expert tips on vehicle safety, breakdown prevention, and emergency preparedness from Hussain Towing Services. Learn from our 5+ years of towing experience in Nandyal and Andhra Pradesh." />
        <meta name="keywords" content="towing blog, vehicle safety tips, breakdown prevention, roadside safety, emergency preparedness, Nandyal driving tips" />
        <link rel="canonical" href="https://hussaintowing.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Hussain Towing Services Blog",
            "description": "Expert advice on vehicle safety, towing, and roadside assistance",
            "url": "https://hussaintowing.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Hussain Towing Services",
              "telephone": "+91 98765 43210"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Towing & Safety <span className="text-primary">Blog</span> 📰
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Expert advice, safety tips, and industry insights from Nandyal's most trusted towing professionals.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Featured Post */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              <Card className="overflow-hidden border-primary/20">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-muted flex items-center justify-center h-64 md:h-auto">
                    <div className="text-center">
                      <div className="text-6xl text-primary mb-2">🚗</div>
                      <p className="text-muted-foreground">Featured Article</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{blogPosts[0].category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(blogPosts[0].date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {blogPosts[0].readTime}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                    <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                    <Link to={blogPosts[0].link}>
                      <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        📖 Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} to={post.link || "#"} className="block">
                  <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer h-full border-2 hover:border-primary">
                    <div className="bg-muted h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl text-primary mb-2">📝</div>
                        <p className="text-sm text-muted-foreground">{post.category}</p>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-primary/10 rounded-lg p-8 md:p-12 mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Emergency Towing?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't wait for a breakdown to find our number. Save our contact and get 24/7 emergency towing across Nandyal and 300km radius.
              </p>
              <Button variant="cta-hero" size="lg">
                <span className="text-lg font-semibold">Call +91 98765 43210</span>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;