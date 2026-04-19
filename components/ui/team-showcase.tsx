'use client'

import { useState } from 'react'
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa'
import { cn } from '@/lib/utils'

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  social?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    behance?: string
  }
}

interface TeamShowcaseProps {
  members: TeamMember[]
  showList?: boolean
  sideContent?: React.ReactNode
}

export default function TeamShowcase({ members, showList = true, sideContent }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const isSingle = members.length === 1

  const col1 = members.filter((_, i) => i % 3 === 0)
  const col2 = members.filter((_, i) => i % 3 === 1)
  const col3 = members.filter((_, i) => i % 3 === 2)

  if (isSingle) {
    const member = members[0]
    return (
      <div className="w-full py-4 px-0 font-sans">
        <PhotoCard
          member={member}
          className="w-full max-w-[260px] min-h-[180px] sm:min-h-[220px] md:min-h-[260px]"
          hoveredId={hoveredId}
          onHover={setHoveredId}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-10 select-none w-full max-w-5xl mx-auto py-6 px-0 md:px-0 font-sans">
      <div className="flex gap-2.5 sm:gap-3 md:gap-4 flex-shrink-0 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[120px] h-[150px] sm:w-[150px] sm:h-[185px] md:w-[210px] md:h-[255px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 mt-[40px] sm:mt-[64px] md:mt-[96px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[128px] h-[162px] sm:w-[168px] sm:h-[205px] md:w-[235px] md:h-[286px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 mt-[18px] sm:mt-[30px] md:mt-[46px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[124px] h-[156px] sm:w-[158px] sm:h-[195px] md:w-[220px] md:h-[270px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {showList ? (
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
          {members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      ) : sideContent ? (
        <div className="flex justify-center md:justify-start items-start flex-1 w-full">
          {sideContent}
        </div>
      ) : null}
    </div>
  )
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember
  className: string
  hoveredId: string | null
  onHover: (id: string | null) => void
}) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100'
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
        }}
      />
    </div>
  )
}

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember
  hoveredId: string | null
  onHover: (id: string | null) => void
}) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive
  const hasSocial =
    member.social?.twitter ??
    member.social?.linkedin ??
    member.social?.instagram ??
    member.social?.behance

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100'
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-foreground w-5' : 'bg-foreground/25'
          )}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-foreground' : 'text-foreground/80'
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none'
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={10} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {member.role}
      </p>
    </div>
  )
}
