import type { Service } from '@/types'
import chiropracticCare from '@/assets/services/chiropractic-care.jpeg'
import neurotherapy from '@/assets/services/neurotherapy.jpeg'
import physiotherapyRehab from '@/assets/services/physiotherapy-rehab.jpeg'
import manualMassageTherapy from '@/assets/services/manual-massage-therapy.jpeg'
import neckBackPainRelief from '@/assets/services/neck-back-pain-relief.jpeg'
import postureCorrection from '@/assets/services/posture-correction.jpeg'
import spineStrengthening from '@/assets/services/spine-strengthening.jpeg'

export const SERVICES: Service[] = [
  {
    id: 'chiropractic-care',
    image: chiropracticCare,
    title: 'Chiropractic Care',
    description:
      'Hands-on spinal adjustments that restore proper alignment, relieve nerve pressure, and improve mobility.',
    longDescription:
      'Chiropractic care is a hands-on, drug-free treatment where a trained specialist applies controlled pressure to your spine and joints to correct misalignments. These adjustments relieve pressure on compressed nerves, restore proper joint movement, and allow your body to heal itself naturally — without medication or surgery.',
    whoNeedsIt: [
      'Anyone with chronic back or neck stiffness',
      'People with a pinched nerve or radiating pain',
      'Desk workers with poor spinal alignment',
      'Patients looking for a non-surgical, drug-free option',
    ],
    benefits: ['Restores proper spinal alignment', 'Relieves pinched nerves', 'Drug-free, non-invasive technique'],
  },
  {
    id: 'neurotherapy',
    image: neurotherapy,
    title: 'Neurotherapy',
    description:
      'Nervous-system focused treatment that targets pain at its neurological root cause, not just the symptoms.',
    longDescription:
      'Neurotherapy focuses on the nervous system rather than just the site of pain. By assessing how nerves are functioning, we identify the actual root cause behind chronic or recurring pain and treat it directly — rather than temporarily masking symptoms — for relief that lasts.',
    whoNeedsIt: [
      'Patients with chronic pain that keeps returning',
      'People with nerve-related tingling or numbness',
      'Anyone who hasn\'t found lasting relief elsewhere',
      'Patients wanting a root-cause diagnosis, not a quick fix',
    ],
    benefits: ['Root-cause pain assessment', 'Nerve function restoration', 'Personalized to your condition'],
  },
  {
    id: 'physiotherapy-rehab',
    image: physiotherapyRehab,
    title: 'Physiotherapy & Rehabilitation',
    description:
      'Guided exercise and mobility programs led by a licensed physiotherapist to rebuild strength after injury.',
    longDescription:
      'Our physiotherapy and rehabilitation programs are guided, exercise-based plans led by a licensed physiotherapist. Whether you are recovering from an injury, surgery, or a sports setback, we rebuild your strength, mobility, and confidence step by step, with progress tracked at every visit.',
    whoNeedsIt: [
      'Athletes recovering from sports injuries',
      'Patients recovering post-surgery',
      'Anyone rebuilding strength after a long recovery',
      'People with limited mobility or joint stiffness',
    ],
    benefits: ['Sports & injury recovery', 'Guided mobility exercises', 'Progress tracked every visit'],
  },
  {
    id: 'manual-massage-therapy',
    image: manualMassageTherapy,
    title: 'Manual & Massage Therapy',
    description:
      'Hands-on soft-tissue work that relieves muscle tension, breaks up spasms, and speeds up recovery.',
    longDescription:
      'Manual and massage therapy uses focused, hands-on techniques to relieve tight muscles, break up spasms, and improve blood flow to injured tissue. It is often paired with chiropractic and physiotherapy sessions to speed up recovery and keep your body relaxed between visits.',
    whoNeedsIt: [
      'People with tight or knotted muscles',
      'Patients experiencing muscle spasms',
      'Anyone under high physical or work-related stress',
      'Patients wanting to complement ongoing spinal treatment',
    ],
    benefits: ['Relieves muscle spasms', 'Reduces chronic tension', 'Complements spinal treatment'],
  },
  {
    id: 'neck-back-pain-relief',
    image: neckBackPainRelief,
    title: 'Neck & Back Pain Relief',
    description:
      'Targeted treatment for sciatica, herniated or bulging discs, spinal stiffness, and lower back pain.',
    longDescription:
      'This is a targeted treatment track for some of the most common pain complaints we see — sciatica, herniated or bulging discs, spinal stiffness, and lower back pain. Care is tailored to your specific diagnosis, combining chiropractic adjustment, therapy, and guided exercise for lasting relief.',
    whoNeedsIt: [
      'Anyone with sciatica or radiating leg pain',
      'Patients diagnosed with a herniated or bulging disc',
      'People with persistent lower back pain',
      'Anyone wanting to avoid surgery for spinal issues',
    ],
    benefits: ['Sciatica & disc care', 'Lower back pain relief', 'Safe, effective, no surgery'],
  },
  {
    id: 'posture-correction',
    image: postureCorrection,
    title: 'Posture Correction',
    description:
      'Corrective care that addresses poor posture at its source, protecting your spine for the long term.',
    longDescription:
      'Poor posture — from long hours at a desk or looking down at a phone — puts constant strain on your spine. Our posture correction care identifies exactly where your alignment has shifted and builds a corrective plan of adjustments and targeted exercises to protect your spine for the long term.',
    whoNeedsIt: [
      'Desk workers and students with long sitting hours',
      'Anyone with rounded shoulders or forward head posture',
      'People noticing early signs of spinal strain',
      'Patients wanting to prevent future back problems',
    ],
    benefits: ['Posture assessment', 'Corrective exercise plans', 'Prevents recurring strain'],
  },
  {
    id: 'spine-strengthening',
    image: spineStrengthening,
    title: 'Spine Strengthening Programs',
    description:
      'Structured strengthening and stretching plans that keep your spine and nervous system healthy long-term.',
    longDescription:
      'Once acute pain is under control, long-term spine health depends on strength and flexibility. Our spine strengthening programs are structured, progressive plans of stretching and strengthening exercises designed to keep your spine and nervous system healthy and prevent the same pain from coming back.',
    whoNeedsIt: [
      'Patients finishing a pain-relief treatment plan',
      'Anyone prone to recurring back or neck issues',
      'People wanting to build long-term spinal strength',
      'Active individuals looking to prevent future injury',
    ],
    benefits: ['Complete spine & nerve care', 'Stretching & strengthening plans', 'Built to prevent re-injury'],
  },
]
