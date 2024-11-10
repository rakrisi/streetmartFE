import { Card, CardContent } from '@/components/ui/card';
import { SignInDialog } from '@/components/auth/SignInDialog';
import { CustomerOnboardingDialog } from '@/components/onboarding/CustomerOnboardingDialog';
import { ShopOnboardingDialog } from '@/components/onboarding/ShopOnboardingDialog';
import {
  Store,
  ShoppingBag,
  MapPin,
  TrendingUp,
  Users,
  Building2,
  Search,
  Smartphone,
  Clock,
} from 'lucide-react';
// Replace the import statement with a valid image file path
import streatImage from '../public/images/streat.jpg';
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Store className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">StreetMart</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900">Benefits</a>
            </div>
            <div className="flex space-x-4">
              <SignInDialog />
              <CustomerOnboardingDialog />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Connect with Local Shops in Your Neighborhood
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                StreetMart brings local stores to your fingertips. Browse products, support local businesses, and shop in your community.
              </p>
              <div className="flex space-x-4">
                <CustomerOnboardingDialog />
                <ShopOnboardingDialog variant="outline" />
              </div>
            </div>
            <div className="relative">
              <img
                src={streatImage}
                alt="Local store"
                className="rounded-2xl shadow-2xl"
              />
            
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose StreetMart?</h2>
            <p className="text-xl text-gray-600">Empowering local businesses and shoppers alike</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <Search className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Discover Local Stores</h3>
                <p className="text-gray-600">
                  Find unique products from local shops in your neighborhood
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p className="text-gray-600">
                  Browse products and connect with stores through our simple platform
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Support Local</h3>
                <p className="text-gray-600">
                  Help your community thrive by supporting local businesses
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How StreetMart Works</h2>
            <p className="text-xl text-gray-600">Simple steps to connect shops and customers</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 inline-block mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse</h3>
              <p className="text-gray-600">Search for products in your area</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 inline-block mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Locate</h3>
              <p className="text-gray-600">Find stores near you</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 inline-block mb-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit</h3>
              <p className="text-gray-600">Visit the store in person</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 inline-block mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Shop</h3>
              <p className="text-gray-600">Make your purchase at the store</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits for Everyone</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Store className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">For Store Owners</h3>
                    <p className="text-gray-600">
                      Increase visibility, attract new customers, and grow your business with our platform
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">For Customers</h3>
                    <p className="text-gray-600">
                      Discover unique products, support local businesses, and shop conveniently in your community
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">For Communities</h3>
                    <p className="text-gray-600">
                      Foster local economic growth and build stronger neighborhood connections
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80"
                alt="Happy store owner"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join StreetMart today and be part of the local shopping revolution
            </p>
            <div className="flex justify-center space-x-4">
              <ShopOnboardingDialog variant="secondary" />
              <CustomerOnboardingDialog variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Store className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">StreetMart</span>
              </div>
              <p className="text-gray-600">
                Connecting local shops with their community
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-600">
                <li>How it Works</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 StreetMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;