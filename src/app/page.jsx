'use client';
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { saveAs } from "file-saver";
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  BookIcon,
  LinkedInIcon,
  PublicationIcon,
} from '@/components/SocialIcons'
import logoSZ from '@/images/logos/sz.png'
import logoPremium from '@/images/logos/logo.jpg'
import logoACL from '@/images/logos/acl.svg'
import logoUST from '@/images/logos/ust.jpg'
import logoFlashGreen from '@/images/logos/flashgreen.png'
import project1 from '@/images/photos/premiumproject.png'
import project2 from '@/images/photos/flashgreen.png'
import project3 from '@/images/photos/bibo.png'
import project4 from '@/images/photos/stl.png'
import project5 from '@/images/photos/code.png'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}
function CopyEmail() {
  navigator.clipboard.writeText("hi@tonydu.com");
}
function EmailContact() {
  return (
    <div
      action="#"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact Me</span>
      </h2>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="hi@tonydu.com"
          aria-label="Email address"
          required
          disabled
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="button" className="ml-4 flex-none" onClick={CopyEmail}>
          Copy
        </Button>
      </div>
    </div>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7 stroke-zinc-400 dark:stroke-zinc-500" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}
function Conference({ content }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={content.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {content.title}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {content.authors}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          // aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={content.time}>{content.time}</time>
        </dd>
      </dl>
    </li>
  )
}

function Work() {
  let workExperience = [
    {
      company: 'Premium Dental Lab HK',
      title: 'Software Engineer',
      logo: logoPremium,
      start: '2022 June',
      end: '2023 June',
    },
    {
      company: 'Flash Green',
      title: 'Software Engineer',
      logo: logoFlashGreen,
      start: '2021 Nov',
      end: '2022 June',
    },
    {
      company: 'HKUST',
      title: 'Research Asssistant',
      logo: logoUST,
      start: '2019 Sep',
      end: '2021 June',
    },
    {
      company: 'Shen Zhen Idearforauto Technology Limited',
      title: 'Software Intern',
      logo: logoSZ,
      start: '2017 July',
      end: '2017 Aug',
    },
  ]
  const saveFile = () => {
    saveAs(
      "@/files/Tony's Resume 20230817.pdf",
      "TonyDU_CV.pdf"
    );
  };

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {workExperience.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button onClick={saveFile} variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
function Education() {
  let schoolExperience = [
    {
      company: 'Hong Kong University Of Science and Technology',
      title: 'Bachelor of Engineering - BE, ECE',
      logo: logoUST,
      start: '2015',
      end: '2019',
    },
    {
      company: 'Hong Kong University Of Science and Technology',
      title: 'Bachelor of Science - BS, Mathematics',
      logo: logoUST,
      start: '2015',
      end: '2019',
    },
    {
      company: 'Hong Kong University Of Science and Technology',
      title: 'Minor In Information Technology',
      logo: logoUST,
      start: '2015',
      end: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BookIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      
      <ol className="mt-6 space-y-4">
        {schoolExperience.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>

      <p className="text-sm mt-6 text-zinc-600 dark:text-zinc-400">
        - First Honor
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        - Dean’s list
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        - University’s Scholarship Scheme for Continuing Undergraduate Students
      </p>
    </div>
  )
}
function Publication() {
  let publications = [
    {
      title: 'Improving Fine-grained Entity Typing with Entity Linking',
      authors: 'Hongliang Dai, Donghong Du, Xin Li, Yangqiu Song',
      logo: logoACL,
      time: 'Nov 2019',
    },
  ]

  return (
    <a href="/publication">
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <PublicationIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Publication</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {publications.map((role, roleIndex) => (
            <Conference key={roleIndex} content={role} />
          ))}
        </ol>
      </div>
    </a>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[project1, project2, project3, project4, project5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I'm Tony DU, a diligent and flexible full-stack software developer with solid mathematical knowledge and machine learning experience. Eager to work as a software engineer and open to Data Analyst. Enthusiastic about technology, coding, and continually expanding my knowledge. 
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/dduaa"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/donghong-du-070442141/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Publication />
            <Education />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <EmailContact />
            <Work />
          </div>
        </div>
      </Container>
    </>
  )
}
