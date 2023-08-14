import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  marginLeft: 350,
  fontFamily: "-apple-system, Roboto, sans-serif, seheadingStylerif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 600,
}

const show = function show() {
  document.getElementById('image')
      .style.display = "block";
  document.getElementById('btnID')
      .style.display = "none";
}
const toAdilan = function() {
  document.getElementById("demo").innerHTML = "บ๊ายยยยยยยยยยบายยฮ่ะสาวๆๆ ผมอดิลันสุดหล่อ";
}
const headingAccentStyles = {
  color: "#663399",
  fontSize: "3rem"
}

const TextFont = {
  fontSize : "2rem",
  marginLeft: "1rem"
}
const headingAccentStyles1 = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const textStyle = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingAccentStyles}>
      แนะนำสถานที่ใน ม.อ. หาดใหญ่ <span style={textStyle}>By Adilan</span>
        <br />
        <span style={headingStyles}>— สวัสดีสาวสวยชาวโลกที่น่ารักทุกคน กระผมอดิลันเองครับ 🎉🎉🎉</span>
      </h1>
      <p style={TextFont}>
      เนื่องในวันจันทร์ที่ฝนตกแสนสดใสนี้ กระผมจะมารีวิวสถานที่นึงใน ม.อ. ที่ใครเห็นเป็นต้องหลงไหล 😎
      </p>
      <p style={TextFont}>
      สถานที่นี้นั่นก็คือ................ ??????????
      </p>
      <img
        alt="Gatsby G Logo"
        src="https://www.hatyaifocus.com/ckeditor/upload/forums/1/%E0%B9%82%E0%B8%9A%E0%B9%89/%E0%B8%9E.%E0%B8%A2.63/%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%95%E0%B8%A3%E0%B8%B1%E0%B8%87/1604201870977.jpg"
      />
      <h1>อ่างเก็บน้ำรูปหัวใจ นั่นเอง!!!!</h1>
      <p id="demo" style={headingAccentStyles}></p>

      <button type="text" onClick={toAdilan} style={TextFont}>ทดสอบนะ</button>
      <button type="button" onClick={show} id="btnID" style={TextFont}>โชว์สุดหล่อ อันนี้ล้อเล่นให้ตกใจ</button>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
