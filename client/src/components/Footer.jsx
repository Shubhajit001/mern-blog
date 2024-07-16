import React from 'react';
import { Footer, FooterIcon } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsGithub, BsInstagram, BsTwitter, BsDribbble} from 'react-icons/bs';

export default function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Shubhajit's</span>Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='http://Shubhajitdev.com'
                                    target='_blank'
                                    rel='noopener noreferrer'>Shubhajitdev
                                </Footer.Link>
                                <Footer.Link
                                    href='/blog'
                                    target='_blank'
                                    rel='noopener noreferrer'>Shubhajit's blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://github.com/Shubhajit001'
                                    target='_blank'
                                    rel='noopener noreferrer'>GitHub
                                </Footer.Link>
                                <Footer.Link
                                    href='#'>Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'>Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href='#'>Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="https://shubhajitdev.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        by="Shubhajitdev.com"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' target='_blank' icon={BsFacebook} />
                        <Footer.Icon href='#' target='_blank' icon={BsGithub} />
                        <Footer.Icon href='#' target='_blank' icon={BsInstagram} />
                        <Footer.Icon href='#' target='_blank' icon={BsTwitter} />
                        <Footer.Icon href='https://www.youtube.com/watch?v=Kkht2mwSL_I&t=8510s' target='_blank' icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
