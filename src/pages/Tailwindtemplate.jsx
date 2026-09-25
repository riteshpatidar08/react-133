import React from "react";

function TailwindTemplate() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>TechNova</h1>
        <p>Build better products with modern web technologies.</p>
      </header>

      {/* Navigation */}
      <nav>
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Services</a>
        <a href="/">About Us</a>
        <a href="/">Contact</a>
      </nav>

      <main>
        {/* Hero Section */}
        <section>
          <span>Welcome to TechNova</span>
          <h1>Build Fast. Build Beautiful. Build Better.</h1>
          <p>
            We help startups and businesses create modern, scalable,
            high-performance digital products that customers love.
          </p>

          <button>Get Started</button>
          <button>View Our Work</button>
        </section>

        {/* Typography */}
        <section>
          <h2>Typography</h2>

          <h1>Heading One</h1>
          <h2>Heading Two</h2>
          <h3>Heading Three</h3>
          <h4>Heading Four</h4>
          <h5>Heading Five</h5>
          <h6>Heading Six</h6>

          <p>
            Technology is transforming the way businesses operate. Modern
            applications need to be fast, accessible, responsive, and easy
            to use.
          </p>

          <strong>Important information appears here.</strong>

          <br />

          <em>
            Great design is not just what something looks like, but how it
            works.
          </em>

          <blockquote>
            "The best way to predict the future is to create it."
          </blockquote>

          <code>npm install react</code>
        </section>

        {/* Colors */}
        <section>
          <h2>Colors</h2>

          <div>Primary Blue</div>
          <div>Success Green</div>
          <div>Warning Yellow</div>
          <div>Error Red</div>
          <div>Information Purple</div>
          <div>Neutral Gray</div>
          <div>Dark Black</div>
          <div>White</div>
        </section>

        {/* Spacing */}
        <section>
          <h2>Spacing Examples</h2>

          <div>
            <h3>Small Spacing</h3>
            <p>Content with a small amount of spacing.</p>
          </div>

          <div>
            <h3>Medium Spacing</h3>
            <p>Content with a medium amount of spacing.</p>
          </div>

          <div>
            <h3>Large Spacing</h3>
            <p>Content with a large amount of spacing.</p>
          </div>
        </section>

        {/* Services */}
        <section>
          <h2>Our Services</h2>
          <p>
            We provide end-to-end digital solutions for growing businesses.
          </p>

          <div>
            <article>
              <h3>Web Development</h3>
              <p>
                We build fast, responsive, and scalable websites using
                modern technologies like React, Next.js, and Node.js.
              </p>
              <button>Learn More</button>
            </article>

            <article>
              <h3>UI/UX Design</h3>
              <p>
                Our designers create intuitive and beautiful interfaces
                that provide a great experience across all devices.
              </p>
              <button>Learn More</button>
            </article>

            <article>
              <h3>Mobile Development</h3>
              <p>
                Build powerful mobile applications for Android and iOS
                using modern cross-platform technologies.
              </p>
              <button>Learn More</button>
            </article>

            <article>
              <h3>Cloud Solutions</h3>
              <p>
                Deploy and scale your applications with secure and reliable
                cloud infrastructure.
              </p>
              <button>Learn More</button>
            </article>
          </div>
        </section>

        {/* Flexbox */}
        <section>
          <h2>Our Team</h2>

          <div>
            <article>
              <h3>Sarah Johnson</h3>
              <p>Chief Executive Officer</p>
            </article>

            <article>
              <h3>Michael Chen</h3>
              <p>Lead Developer</p>
            </article>

            <article>
              <h3>Emily Davis</h3>
              <p>Product Designer</p>
            </article>

            <article>
              <h3>David Wilson</h3>
              <p>Marketing Manager</p>
            </article>
          </div>
        </section>

        {/* Grid */}
        <section>
          <h2>Featured Projects</h2>

          <div>
            <article>
              <h3>ShopEasy</h3>
              <p>
                An e-commerce platform that helps customers discover and
                purchase products online.
              </p>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </article>

            <article>
              <h3>FinancePro</h3>
              <p>
                A personal finance application for tracking expenses,
                budgets, and investments.
              </p>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>PostgreSQL</span>
            </article>

            <article>
              <h3>HealthTrack</h3>
              <p>
                A healthcare dashboard for monitoring appointments,
                patients, and medical records.
              </p>
              <span>React</span>
              <span>Express</span>
              <span>MySQL</span>
            </article>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2>Buttons</h2>

          <button>Primary Action</button>
          <button>Secondary Action</button>
          <button>Save Changes</button>
          <button>Delete Account</button>
          <button>Download Report</button>
          <button disabled>Currently Unavailable</button>
        </section>

        {/* Forms */}
        <section>
          <h2>Contact Us</h2>

          <form>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="country">Country</label>

              <select id="country">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
              </select>
            </div>

            <div>
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                placeholder="Tell us how we can help..."
              />
            </div>

            <label>
              <input type="checkbox" />
              Subscribe to our newsletter
            </label>

            <p>Preferred contact method:</p>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
              />
              Phone
            </label>

            <br />

            <button type="submit">Send Message</button>
          </form>
        </section>

        {/* Product Cards */}
        <section>
          <h2>Popular Products</h2>

          <div>
            <article>
              <h3>Pro Laptop X1</h3>
              <p>
                High-performance laptop designed for developers and
                creative professionals.
              </p>
              <strong>$1,299</strong>
              <p>⭐ 4.8/5 (245 reviews)</p>
              <button>Add to Cart</button>
            </article>

            <article>
              <h3>Wireless Headphones</h3>
              <p>
                Premium noise-cancelling headphones with up to 40 hours
                of battery life.
              </p>
              <strong>$199</strong>
              <p>⭐ 4.6/5 (1,120 reviews)</p>
              <button>Add to Cart</button>
            </article>

            <article>
              <h3>Smart Watch Pro</h3>
              <p>
                Track your fitness, monitor your activity, and stay
                connected throughout the day.
              </p>
              <strong>$249</strong>
              <p>⭐ 4.7/5 (890 reviews)</p>
              <button>Add to Cart</button>
            </article>
          </div>
        </section>

        {/* Lists */}
        <section>
          <h2>Technologies We Use</h2>

          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>

          <h3>How We Build Products</h3>

          <ol>
            <li>Understand the requirements</li>
            <li>Create the product strategy</li>
            <li>Design the user interface</li>
            <li>Develop the application</li>
            <li>Test the product</li>
            <li>Deploy to production</li>
            <li>Monitor and improve</li>
          </ol>
        </section>

        {/* Table */}
        <section>
          <h2>Recent Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#ORD-1001</td>
                <td>Rahul Sharma</td>
                <td>Pro Laptop X1</td>
                <td>$1,299</td>
                <td>Delivered</td>
              </tr>

              <tr>
                <td>#ORD-1002</td>
                <td>Priya Singh</td>
                <td>Smart Watch Pro</td>
                <td>$249</td>
                <td>Processing</td>
              </tr>

              <tr>
                <td>#ORD-1003</td>
                <td>James Wilson</td>
                <td>Wireless Headphones</td>
                <td>$199</td>
                <td>Shipped</td>
              </tr>

              <tr>
                <td>#ORD-1004</td>
                <td>Emma Brown</td>
                <td>Pro Laptop X1</td>
                <td>$1,299</td>
                <td>Delivered</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Alerts */}
        <section>
          <h2>Notifications</h2>

          <div>
            <strong>Success:</strong>
            <p>Your account has been created successfully.</p>
          </div>

          <div>
            <strong>Warning:</strong>
            <p>Your subscription will expire in 7 days.</p>
          </div>

          <div>
            <strong>Error:</strong>
            <p>Unable to process your payment. Please try again.</p>
          </div>

          <div>
            <strong>Information:</strong>
            <p>A new version of the application is available.</p>
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2>Status Badges</h2>

          <span>New</span>
          <span>Active</span>
          <span>Pending</span>
          <span>Processing</span>
          <span>Completed</span>
          <span>Cancelled</span>
          <span>Featured</span>
        </section>

        {/* Image Section */}
        <section>
          <h2>Our Office</h2>

          <figure>
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              alt="Modern office workspace"
            />
            <figcaption>
              Our modern workspace in Bangalore, India.
            </figcaption>
          </figure>
        </section>

        {/* Testimonials */}
        <section>
          <h2>What Our Customers Say</h2>

          <article>
            <blockquote>
              "TechNova transformed our outdated platform into a modern
              product that our customers genuinely enjoy using."
            </blockquote>

            <p>
              — Ankit Mehta, Founder at FinFlow
            </p>
          </article>

          <article>
            <blockquote>
              "The team was professional, responsive, and delivered
              everything on schedule."
            </blockquote>

            <p>
              — Jessica Miller, CEO at MarketHub
            </p>
          </article>

          <article>
            <blockquote>
              "Our conversion rate increased significantly after
              launching the new website."
            </blockquote>

            <p>
              — Arjun Kapoor, Director at ShopEasy
            </p>
          </article>
        </section>

        {/* FAQ */}
        <section>
          <h2>Frequently Asked Questions</h2>

          <details>
            <summary>How long does a project take?</summary>
            <p>
              Most projects take between 4 and 12 weeks depending on
              their complexity and requirements.
            </p>
          </details>

          <details>
            <summary>Do you provide maintenance?</summary>
            <p>
              Yes. We provide ongoing maintenance, monitoring, security
              updates, and feature development.
            </p>
          </details>

          <details>
            <summary>Do you work with startups?</summary>
            <p>
              Yes. We work with startups, small businesses, and
              established companies.
            </p>
          </details>
        </section>

        {/* Dashboard */}
        <section>
          <h2>Dashboard Overview</h2>

          <div>
            <article>
              <h3>Total Users</h3>
              <p>24,892</p>
              <span>+12.5% this month</span>
            </article>

            <article>
              <h3>Total Revenue</h3>
              <p>$128,450</p>
              <span>+8.2% this month</span>
            </article>

            <article>
              <h3>Total Orders</h3>
              <p>3,842</p>
              <span>+15.4% this month</span>
            </article>

            <article>
              <h3>Conversion Rate</h3>
              <p>4.82%</p>
              <span>+1.3% this month</span>
            </article>
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2>Pricing Plans</h2>

          <article>
            <h3>Starter</h3>
            <p>$19/month</p>

            <ul>
              <li>5 Projects</li>
              <li>10 GB Storage</li>
              <li>Email Support</li>
              <li>Basic Analytics</li>
            </ul>

            <button>Choose Starter</button>
          </article>

          <article>
            <h3>Professional</h3>
            <p>$49/month</p>

            <ul>
              <li>Unlimited Projects</li>
              <li>100 GB Storage</li>
              <li>Priority Support</li>
              <li>Advanced Analytics</li>
              <li>Team Collaboration</li>
            </ul>

            <button>Choose Professional</button>
          </article>

          <article>
            <h3>Enterprise</h3>
            <p>Custom Pricing</p>

            <ul>
              <li>Unlimited Storage</li>
              <li>Dedicated Support</li>
              <li>Advanced Security</li>
              <li>Custom Integrations</li>
              <li>Dedicated Account Manager</li>
            </ul>

            <button>Contact Sales</button>
          </article>
        </section>

        {/* Footer CTA */}
        <section>
          <h2>Ready to Build Something Great?</h2>

          <p>
            Let's turn your idea into a powerful digital product.
          </p>

          <button>Start a Project</button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <h2>TechNova</h2>

        <p>
          Building modern digital experiences for businesses around
          the world.
        </p>

        <div>
          <h3>Company</h3>
          <a href="/">About</a>
          <a href="/">Careers</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </div>

        <div>
          <h3>Resources</h3>
          <a href="/">Documentation</a>
          <a href="/">Help Center</a>
          <a href="/">Community</a>
          <a href="/">API Reference</a>
        </div>

        <div>
          <h3>Legal</h3>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Cookie Policy</a>
        </div>

        <p>© 2026 TechNova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TailwindTemplate;
