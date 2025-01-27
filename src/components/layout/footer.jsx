import { FooterLinks } from "../../data/footer";
import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import FooterAccordion from "../core/footer-accordion";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="py-6 px-5 md:p-8 xl:p-10 bg-primary">
      <div className="pb-8 xl:pb-16 border-b border-gray">
        <div className="flex flex-wrap justify-between -mx-4 gap-y-5">
          <div className="px-4 lg:w-1/2">
            <p className="text-white">Join our newsletter</p>
            <p className="text-gray300">
              We’ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center justify-end px-4 w-full lg:w-1/2 ml-auto">
            <input
              type="text"
              placeholder="Email address"
              className="md:max-w-[280px] w-full h-[56px] text-light-mid bg-lightest-gray border py-2 px-3 text-sm focus:outline-none rounded-sm"
            />
            <button className="text-sm uppercase block md:inline-block py-[18px] px-4 bg-secondary rounded-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between -mx-4 my-8 xl:my-16 gap-y-8">
        <div className="w-full md:w-1/4 px-4">
          <Link
            to="/"
            className="text-2xl font-bold mb-8 text-white inline-block"
          >
            IPSUM
          </Link>
          <p className="text-gray300">
            Delivering unique and complete solutions for your business.
          </p>
        </div>
        <div className="w-full md:w-3/4 px-4 hidden md:block">
          <div className="flex flex-wrap -mx-4  gap-y-8">
            {FooterLinks.map(({ title, list }) => (
              <div key={title} className="w-full md:w-1/2 xl:w-1/4 px-4">
                <p className="text-footer-icon mb-4">{title}</p>
                <ul>
                  {list.map(({ name, url }) => (
                    <li key={name} className="mb-3 text-gray300">
                      <Link to={url}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {FooterLinks.map(({ title, list }) => (
        <FooterAccordion key={title} title={title}>
          <ul className="px-4 mt-4">
            {list.map(({ name, url }) => (
              <li key={name} className="mb-2 text-gray300">
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </FooterAccordion>
      ))}
      <div className="border-t border-footer-border">
        <div className="flex flex-wrap justify-center md:justify-between -mx-4 gap-y-5 pt-8">
          <div className=" md:w-auto px-4">
            <p className="text-gray300 text-center md:text-left">
              © 2024 Ipsum Industries. All rights reserved.
            </p>
          </div>
          <div className=" md:w-auto px-4">
            <div className="flex gap-x-6 text-footer-icon">
              <Facebook strokeWidth={1} />
              <Twitter strokeWidth={1} />
              <Youtube strokeWidth={1} />
              <Linkedin strokeWidth={1} />
              <Github strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
