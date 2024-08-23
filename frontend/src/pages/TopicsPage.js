import React from 'react';
import { CgWebsite } from "react-icons/cg";

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#webServer">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
            </nav>
            <article id="webServer">
                <h3>Web Servers</h3>
                <p>
                    The concept of a designated homepage is the primary webpage for users to view a website's root <strong>domain</strong>, 
                    such as www.example.com. It is the entry point for users and typically provides an overview of the website's content and 
                    important information. The concept of having a designated home page is the same regardless of the server software. 
                    This is because each server has to serve a specific file or page as the homepage when a user visits the domain. 
                    In terms of a designated home page with different languages, <strong>HTML</strong> commonly uses <strong>index.html</strong> 
                    as its root domain or home page while other languages use a different extension, such as index.php.
                </p>
                <p>
                    In the browser's Web Dev/Inspector Network tab output screen, I can see various details about the network 
                    requests made by the browser when loading a page. These details include the <strong>URL</strong> of the requested resource, 
                    the <strong>status code</strong> indicating the success or failure of the request, the <strong>IP address</strong>, and the <strong>port number</strong>. 
                    The status code from the web server is <strong>200 OK</strong>, which means the request succeeded, and the response
                    body has the needed information. The request method <strong>GET</strong> is used, and it means the web browser is 
                    requesting data from the server. The IP address is under “Remote Address” followed by the port number. Additionally, there is information about the connection
                    between the browser and the server and user information. When comparing file details from the local computer to the web server, 
                    there are several differences. First, when accessing a file locally, the URL typically starts with a <strong>scheme</strong> 
                    of  “file:///”, whereas the file accessed from a web server starts with “<strong>https://</strong>”. The URL from the file details
                    on the web server also includes the server's domain name. The web server file details also include the Remote Address which allows
                    a connection to <strong>retrieve</strong> a requested resource. The header response data includes details such as the <strong>content-type</strong>, 
                    which is “text/html” and the date of when the requested resource was last modified.
                </p>
                <p>
                    The favicon.ico has a status of <strong>200 OK</strong> because the OSU server provides the <strong>favicon</strong> automatically, which led to the request
                    being a success since it was found and accessible. The main.css and main.js files have a status of <strong>404</strong> because those files are missing.
                    In this assignment, we are only displaying HTML/text content and not CSS and JS, which support style and functionality. 
                </p>
                <p>
                    From my web server's URL, the scheme is “HTTPS” indicating Hypertext Transfer Protocol and <strong>encryption</strong>. The
                    host domain “web.engr.oregonstate.edu” represents the primary domain name hosted by OSU's College of Engineering. The <strong>subdomains</strong>
                    from my URL are “web” and “engr”. The Tilda symbol followed by my ONID username is my directory within the domain. Lastly, the <strong>path</strong> 
                    “/a1-lazaror/” specifies the specific resource being requested. 
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    The concept of frontend design is for users to have an appropriate experience within a software application. Important factors
                    include the visual design, the graphical user interface, and the interactive experience. <strong>Usability</strong> is critical
                    in frontend design because it measures the user's quality experience when interacting with the application. 
                    Using <strong>colors</strong>, <strong>fonts</strong>, and <strong>pictures</strong> is a way to make the web page to ensure the web page visually appealing and easy to navigate for users.
                    <strong>Icons</strong> are little pictures that show users what things do, like buttons or menus. <strong>Navigation</strong> and other elements help users move around 
                    the software smoothly. Overall, frontend design aims to make software both attractive and easy to use.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>The capability of helping users achieve their objectives successfully.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Users can accomplish tasks with minimal steps or effort.</dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>User-friendly or allows users to easily locate their objectives.</dd>
                    <dt><strong>Error-Free</strong></dt>
                    <dd>Free from errors to prevent accessibility and availability hindrances.</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>Fun and interesting to use. Tailored to the unique preferences of the target audience in both content and design.</dd>
                </dl>
                <p>
                    <strong>Page layout tags</strong> assist machines, like search engine crawlers and screen readers, in comprehending which sections of the page contain specific components.
                </p>
                <ul>
                    <li>
                        The <strong>header</strong> element is the title or name of the website.
                    </li>
                    <li>
                        The <strong>nav</strong> element is like a menu, where links can be placed for different parts of the website.
                    </li>
                    <li>
                        The <strong>main</strong> element is the main content of the website, like articles or stories.
                    </li>
                    <li>
                        The <strong>section</strong> element is used to group related content together.
                    </li>
                    <li>
                        The <strong>article</strong> element is a piece of content that stands on its own.
                    </li>
                    <li>
                        The <strong>footer</strong> element is used for contact or legal information at the bottom of the web page.
                    </li>
                </ul>
                <ol>
                    <li>
                        Anchors for external content use anchor tags with the URL of the external webpage in the <strong>href</strong> attribute to direct users to other websites.
                    </li>
                    <li>
                        Anchors for internal content use anchor tags with the <strong>ID</strong> attribute of the target section or article in the href attribute to enable users to jump directly to specific content within the same webpage.
                    </li>
                    <li>
                        From page to page, the nav element is utilized with <strong>relative</strong> paths to organize links for seamless navigation between different pages within the same website.
                    </li>
                </ol>
            </article>
            <article id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>
                    Optimizing images for a website involves paying attention to several important specifications. First, it is essential to have a <strong>descriptive file name</strong> for each image. This helps search engines 
                    understand what the image is about. Second, aim for a <strong>small file size</strong> to ensure web pages load quickly. This can be achieved by compressing images without losing too much quality. Third, 
                    ensure images have <strong>exact dimensions</strong> that fit the space on the website. Images should not be too big or too small. Fourth, use the <strong>correct file format</strong> for each image type. For example, use “.jpg” 
                    for photos and “.png” for graphics. Fifth, consider providing images in <strong>reduced resolution</strong> to accommodate different screen sizes. Lastly, make sure you're using the right <strong>color mode</strong> to ensure 
                    images display accurately. Following these specifications will help optimize images and improve a website's performance.
                </p>
                <p>
                    The most common file formats for web images include <strong>.GIF</strong>, <strong>.PNG</strong>, and <strong>.SVG</strong> for line art, and <strong>.JPG</strong> and <strong>WebP</strong> for photography. GIF files are perfect for simple graphics and basic animations, which are commonly used for icons and logos. PNG files, 
                    are versatile and used for various image types, offering true transparency and sharp edges. SVG files are unique in being vector-based, allowing them to scale to any size without losing quality, which is great for logos and icons. 
                    JPG files are best suited for photographs and images with lots of detail and color variation, even from loss of quality with compression. WebP offers both lossy and 
                    lossless compression options, resulting in smaller file sizes compared to JPGs without significant quality loss, making it a versatile option for web images.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    Favicons, also known as <strong>favorite icons</strong> or <strong>touch icons</strong>, are crucial for identifying and launching websites and apps across browsers and devices. These icons display a website or app's logo in browser tabs, bookmarks, search results, and device screens. 
                    Commonly saved in file formats like .GIF, .PNG, .ICO, and .SVG, favicons ensure readability across devices. The process involves modifying the original symbol and using tools like the Favicon Generator to create multiple favicon files tailored for different 
                    browsers and devices. Once implemented, browsers automatically detect and display the favicon, enhancing user browsing experience. Favicons serve as visual identifiers, aiding users in navigating websites and apps effortlessly.
                </p>
            </article>
        </>
    );
}
export default TopicsPage;
