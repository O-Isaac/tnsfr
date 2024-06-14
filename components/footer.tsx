import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Logo } from "@/components/brand";

export default function FooterLayout() {
  return (
    <Footer container={true}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Logo height="100px" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="About us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/">The New Flex Studio Record</Footer.Link>
                <Footer.Link href="#team">Team</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us on" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="https://github.com/O-Isaac/tnsfr">
                  Github
                </Footer.Link>
                <Footer.Link href="https://www.instagram.com/thenewflexsr/">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="/"
            by="The New Flex Studio Record"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.instagram.com/thenewflexsr/"
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
