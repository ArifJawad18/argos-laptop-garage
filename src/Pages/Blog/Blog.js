import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-900">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8" data-aos="fade-up"
     data-aos-duration="3000">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Blog Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">
                What are the different ways to manage a state in a React
                application?
              </h3>
              <p className="mt-1 text-gray-900">
                Global state is necessary when we want to get and update data
                anywhere in our app, or in multiple components at least. Server
                state Data that comes from an external server that must be
                integrated with our UI state. Local state is perhaps the easiest
                kind of state to manage in React, considering there are so many
                tools built into the core React library for managing it. Data
                that exists on our URLs, including the pathname and query
                parameters.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                How does prototypical inheritance work?
              </h3>
              <p className="mt-1 text-gray-900">
                JavaScript objects are dynamic "bags" of properties (referred to
                as own properties). JavaScript objects have a link to a
                prototype object. When trying to access a property of an object,
                the property will not only be sought on the object but on the
                prototype of the object, the prototype of the prototype, and so
                on until either a property with a matching name is found or the
                end of the prototype chain is reached.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                What is a unit test? Why should we write unit tests?
              </h3>
              <p className="mt-1 text-gray-900">
                When it comes to software testing, there are many ways to go
                about it, both manually and in an automated fashion. So, you can
                interpret the question “why to write unit tests?” in at least
                two ways. First, what are the benefits you can expect from using
                unit tests. Secondly, why unit tests as opposed to other types
                of tests.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">React vs. Angular vs. Vue?</h3>
              <p className="mt-1 text-gray-900">
                If the choice you’re making is based on Angular vs React alone,
                then you’ll simply need to consider the pros and cons discussed
                for those libraries in this post. But overall, keep in mind that
                both libraries can be used for mobile and web apps, while
                Angular is generally better for more complex apps that are
                enterprise-ready. The choice between React vs Vue is often
                debated and it’s not an easy one. Vue has a vibrant and
                ever-growing community and has taken over popularity vs. React
                in many respects. React developers are still churning out lots
                of new components and extras, so there’s no sign that React is
                on the decline either. Vue is generally more suited to smaller,
                less complex apps and is easier to learn from scratch compared
                to React. Vue can be easier to integrate into new or existing
                projects and many feel its use of HTML templates along with JSX
                is an advantage. Overall, Vue might be the best choice if you’re
                a newer developer and not as familiar with advanced JavaScript
                concepts, while React is quite well suited for experienced
                programmers and developers who have worked with object-oriented
                JavaScript, functional JavaScript, and similar concepts In most
                cases, you probably wouldn’t be deciding between only Angular
                and Vue. They are vastly different libraries with very different
                feature sets and learning curves. Vue is the clear choice for
                less experienced developers, and Angular would be preferred for
                those working on larger apps. A large library like Angular would
                require more diligence in keeping up with what’s new, while Vue
                would be less demanding in this regard and the fact that the two
                most recent major releases of Vue are in separate repositories
                helps. It should also be noted that Vue was created by a
                developer who formerly worked on Angular for Google, so that’s
                another thing to keep in mind, though that wouldn’t have a huge
                impact on your decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
<h1>blog</h1>;
