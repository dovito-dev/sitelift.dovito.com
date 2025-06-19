
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Branding = () => {
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} copied successfully`,
    });
  };

  const colors = [
    { name: 'Navy 50', value: '#f8fafc', class: 'navy-50' },
    { name: 'Navy 100', value: '#f1f5f9', class: 'navy-100' },
    { name: 'Navy 200', value: '#e2e8f0', class: 'navy-200' },
    { name: 'Navy 300', value: '#cbd5e1', class: 'navy-300' },
    { name: 'Navy 400', value: '#94a3b8', class: 'navy-400' },
    { name: 'Navy 500', value: '#64748b', class: 'navy-500' },
    { name: 'Navy 600', value: '#334155', class: 'navy-600' },
    { name: 'Navy 700', value: '#1e293b', class: 'navy-700' },
    { name: 'Navy 800', value: '#0f172a', class: 'navy-800' },
    { name: 'Navy 900', value: '#020617', class: 'navy-900' },
    { name: 'Slate 50', value: '#f8fafc', class: 'slate-50' },
    { name: 'Slate 600', value: '#475569', class: 'slate-600' },
    { name: 'Slate 700', value: '#334155', class: 'slate-700' },
    { name: 'Slate 800', value: '#1e293b', class: 'slate-800' },
    { name: 'Slate 900', value: '#0f172a', class: 'slate-900' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-slate-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Brand Guidelines</h1>
          <p className="text-slate-600">Complete branding documentation for Dovito.Site developers and designers.</p>
        </div>

        <div className="grid gap-8">
          {/* Logo & Brand Identity */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Logo & Brand Identity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Primary Logo</h3>
                  <div className="flex items-center space-x-4 p-6 bg-white rounded-lg border">
                    <div className="w-8 h-8 bg-gradient-to-br from-navy-600 to-navy-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <span className="text-xl font-bold text-slate-900">Dovito.Site</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Logo Construction</h3>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <code className="text-sm">
                      Icon: 32x32px rounded square with navy gradient<br/>
                      Text: Inter font, 20px, bold weight<br/>
                      Spacing: 8px between icon and text
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Typography</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Primary Font</h3>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold mb-2">Inter</p>
                    <p className="text-slate-600">Used for all headings, body text, and UI elements</p>
                    <button 
                      onClick={() => copyToClipboard("font-family: 'Inter', sans-serif;", "Inter font CSS")}
                      className="mt-2 flex items-center text-sm text-navy-600 hover:text-navy-700"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy CSS
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Font Weights</h3>
                  <div className="space-y-2">
                    <div className="font-light">Light (300) - Subtle text</div>
                    <div className="font-normal">Regular (400) - Body text</div>
                    <div className="font-medium">Medium (500) - Emphasis</div>
                    <div className="font-semibold">Semi-bold (600) - Subheadings</div>
                    <div className="font-bold">Bold (700) - Headlines</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color Palette */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Primary Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {colors.map((color) => (
                      <div key={color.name} className="text-center">
                        <div 
                          className="w-full h-16 rounded-lg mb-2 border cursor-pointer hover:scale-105 transition-transform"
                          style={{ backgroundColor: color.value }}
                          onClick={() => copyToClipboard(color.value, color.name)}
                        />
                        <p className="text-xs font-medium text-slate-900">{color.name}</p>
                        <p className="text-xs text-slate-600">{color.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* UI Components */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">UI Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Buttons</h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-navy-600 hover:bg-navy-700 text-white rounded-full">
                        Primary Button
                      </Button>
                      <Button variant="outline" className="rounded-full">
                        Secondary Button
                      </Button>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <code className="text-sm">
                        Primary: bg-navy-600 hover:bg-navy-700, rounded-full<br/>
                        Secondary: variant="outline", rounded-full
                      </code>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Cards</h3>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <code className="text-sm">
                      Border: border-2 border-slate-200<br/>
                      Hover: hover:border-navy-300<br/>
                      Background: bg-white<br/>
                      Shadow: shadow-lg for elevated cards
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spacing & Layout */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Spacing & Layout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Section Padding</h4>
                  <code className="text-sm">py-20 (80px vertical padding)</code>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Container</h4>
                  <code className="text-sm">container mx-auto px-4 sm:px-6 lg:px-8</code>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Max Width</h4>
                  <code className="text-sm">max-w-5xl mx-auto (for content sections)</code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Voice */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Brand Voice & Messaging</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Tone</h3>
                  <p className="text-slate-600">Professional yet approachable, confident, results-focused</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Key Messages</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Fast, same-week website rebuilds</li>
                    <li>• Colorado-based, local business focused</li>
                    <li>• Modern, high-converting websites</li>
                    <li>• No long-term contracts</li>
                    <li>• Quality without compromise</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Tagline</h3>
                  <p className="text-slate-600 font-medium">"Colorado Website Design Made Fast"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Branding;
