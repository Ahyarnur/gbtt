import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const MARGIN = 48

const profile = {
  name: 'Ahyar Nur Ichwan',
  title: 'Cybersecurity & Frontend Developer',
  location: 'Cilacap, Indonesia',
  summary: 'Threat-aware web experiences with a security-first mindset.',
  links: [
    'GitHub: github.com/Ahyarnur',
    'LinkedIn: linkedin.com/in/hyrichwan',
    'Instagram: instagram.com/ahyarrrrrrrrrr'
  ]
}

const skills = [
  'Cybersecurity fundamentals',
  'Network security basics',
  'Web development (Laravel, PHP, JavaScript)',
  'Frontend development (React, Next.js)',
  'UI/UX implementation'
]

const experience = [
  {
    title: 'JKB Learning Center',
    period: '2026',
    location: 'Cilacap, Indonesia',
    items: [
      'Supported logistics as equipment division member',
      'Prepared technical needs and event supplies',
      'Ensured smooth event operations through equipment management'
    ]
  },
  {
    title: 'JKB Fest',
    period: '2026',
    location: 'Cilacap, Indonesia',
    items: [
      'Led the PR committee as Public Relations Coordinator',
      'Managed communication and publicity strategy for the event',
      'Coordinated the PR team for promotions and outreach',
      'Built external relationships to support event success'
    ]
  },
  {
    title: 'Study Banding HIMATRIS & HIMTI UNSIQ',
    period: '2025',
    location: 'Indonesia',
    items: [
      'Served as Event Committee Coordinator',
      'Planned and executed the event program and agenda',
      'Coordinated the team to ensure activities ran on schedule',
      'Handled communication with external parties'
    ]
  },
  {
    title: 'Himpunan Mahasiswa Komputer dan Bisnis (HIMATRIS)',
    period: '2025 - Present',
    location: 'Cilacap, Indonesia',
    items: [
      'Managed internal and external communication as a PR team member',
      'Supported event publicity and strengthened organization branding on campus',
      'Contributed to information dissemination through social media and promotions'
    ]
  },
  {
    title: 'Field Work Practice at PT CAZH',
    period: '2024',
    location: 'Purwokerto, Indonesia',
    items: [
      'Developed mobile app features using PHP, HTML, and CSS',
      'Assisted UI design and feature implementation',
      'Worked through planning to implementation in SDLC',
      'Created DESAKU web app for village administration'
    ]
  }
]

const education = [
  {
    title: 'Politeknik Negeri Cilacap',
    period: '2025 - Present',
    location: 'Cilacap, Indonesia',
    items: ['Cybersecurity Engineering program']
  },
  {
    title: "SMK Ma'arif NU 1 Ajibarang",
    period: '2022 - 2025',
    location: 'Ajibarang, Indonesia',
    items: ['Vocational high school focused on web development']
  }
]

function wrapText(text: string, maxWidth: number, font: any, size: number) {
  const words = text.split(' ')
  const lines: string[] = []
  let currentLine = ''

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word
    const testWidth = font.widthOfTextAtSize(testLine, size)
    if (testWidth <= maxWidth) {
      currentLine = testLine
    } else {
      if (currentLine) {
        lines.push(currentLine)
      }
      currentLine = word
    }
  }

  if (currentLine) {
    lines.push(currentLine)
  }

  return lines
}

export async function GET() {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
  const { width, height } = page.getSize()

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  let y = height - MARGIN

  const drawText = (text: string, size: number, isBold = false) => {
    const activeFont = isBold ? bold : font
    page.drawText(text, {
      x: MARGIN,
      y,
      size,
      font: activeFont,
      color: rgb(0, 0, 0)
    })
    y -= size + 6
  }

  const drawSectionTitle = (title: string) => {
    y -= 8
    page.drawText(title.toUpperCase(), {
      x: MARGIN,
      y,
      size: 11,
      font: bold,
      color: rgb(0, 0, 0)
    })
    y -= 10
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: width - MARGIN, y },
      thickness: 0.7,
      color: rgb(0.2, 0.2, 0.2)
    })
    y -= 14
  }

  drawText(profile.name, 20, true)
  drawText(profile.title, 12)
  drawText(profile.location, 10)

  const linkLine = profile.links.join(' | ')
  const linkLines = wrapText(linkLine, width - MARGIN * 2, font, 9)
  for (const line of linkLines) {
    page.drawText(line, {
      x: MARGIN,
      y,
      size: 9,
      font,
      color: rgb(0, 0, 0)
    })
    y -= 12
  }

  drawSectionTitle('Summary')
  const summaryLines = wrapText(profile.summary, width - MARGIN * 2, font, 10)
  for (const line of summaryLines) {
    page.drawText(line, {
      x: MARGIN,
      y,
      size: 10,
      font,
      color: rgb(0, 0, 0)
    })
    y -= 12
  }

  drawSectionTitle('Skills')
  for (const skill of skills) {
    page.drawText(`- ${skill}`, {
      x: MARGIN,
      y,
      size: 10,
      font,
      color: rgb(0, 0, 0)
    })
    y -= 12
  }

  drawSectionTitle('Experience')
  for (const item of experience) {
    page.drawText(`${item.title} | ${item.period} | ${item.location}`, {
      x: MARGIN,
      y,
      size: 10,
      font: bold,
      color: rgb(0, 0, 0)
    })
    y -= 12

    for (const detail of item.items) {
      const detailLines = wrapText(`- ${detail}`, width - MARGIN * 2, font, 9.5)
      for (const line of detailLines) {
        page.drawText(line, {
          x: MARGIN + 6,
          y,
          size: 9.5,
          font,
          color: rgb(0, 0, 0)
        })
        y -= 11
      }
    }

    y -= 6
  }

  drawSectionTitle('Education')
  for (const item of education) {
    page.drawText(`${item.title} | ${item.period} | ${item.location}`, {
      x: MARGIN,
      y,
      size: 10,
      font: bold,
      color: rgb(0, 0, 0)
    })
    y -= 12

    for (const detail of item.items) {
      page.drawText(`- ${detail}`, {
        x: MARGIN + 6,
        y,
        size: 9.5,
        font,
        color: rgb(0, 0, 0)
      })
      y -= 11
    }

    y -= 6
  }

  const pdfBytes = await pdfDoc.save()
  const blob = new Blob([pdfBytes], { type: 'application/pdf' })

  return new Response(blob, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="cv-ahyar.pdf"',
      'Cache-Control': 'no-store'
    }
  })
}
