'use client'

import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer'
import { profile, skills } from '@/data/profile'
import { experiences } from '@/data/experience'
import { projects } from '@/data/projects'
import { certifications } from '@/data/certifications'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.3,
    backgroundColor: '#ffffff',
  },
  sidebar: {
    width: '35%',
    backgroundColor: '#0f172a',
    padding: 18,
    height: '100%',
  },
  main: {
    width: '65%',
    padding: 20,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  sidebarName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 3,
  },
  sidebarTitle: {
    fontSize: 9,
    color: '#34d399',
    marginBottom: 18,
  },
  sidebarSection: {
    marginBottom: 16,
  },
  sidebarSectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: '1 dashed #334155',
  },
  contactItem: {
    fontSize: 8,
    color: '#94a3b8',
    marginBottom: 4,
  },
  skillItem: {
    fontSize: 8,
    color: '#cbd5e1',
    marginBottom: 3,
    paddingLeft: 6,
  },
  summaryText: {
    fontSize: 8,
    color: '#475569',
    textAlign: 'justify',
    lineHeight: 1.4,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
    paddingBottom: 3,
    borderBottom: '1 dashed #cbd5e1',
  },
  experienceItem: {
    marginBottom: 10,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  expTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: 1,
  },
  expDate: {
    fontSize: 7,
    color: '#64748b',
    marginLeft: 8,
  },
  expCompany: {
    fontSize: 8,
    color: '#059669',
    marginBottom: 3,
  },
  expDesc: {
    fontSize: 7,
    color: '#475569',
    marginBottom: 3,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  techItem: {
    fontSize: 6,
    backgroundColor: '#f1f5f9',
    color: '#64748b',
    padding: '1 4',
    marginRight: 3,
    marginBottom: 2,
    borderRadius: 2,
  },
  certItem: {
    marginBottom: 6,
  },
  certName: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  certIssuer: {
    fontSize: 7,
    color: '#64748b',
  },
  projectItem: {
    marginBottom: 8,
    paddingLeft: 8,
    borderLeft: '2 solid #34d399',
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  projectDesc: {
    fontSize: 7,
    color: '#475569',
    marginTop: 1,
  },
})

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sidebar}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.sidebarName}>{profile.name}</Text>
          <Text style={styles.sidebarTitle}>{profile.title}</Text>
        </View>
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Contact</Text>
          <Text style={styles.contactItem}>{profile.email}</Text>
          <Text style={styles.contactItem}>{profile.phone}</Text>
          <Text style={styles.contactItem}>{profile.location}</Text>
          <Text style={styles.contactItem}>LinkedIn</Text>
        </View>
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Skills</Text>
          {skills.map((skill, index) => (
            <Text key={index} style={styles.skillItem}>• {skill}</Text>
          ))}
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{profile.bio}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experiences.slice(0, 4).map((exp) => (
            <View key={exp.id} style={styles.experienceItem}>
              <View style={styles.expHeader}>
                <Text style={styles.expTitle}>{exp.position}</Text>
                <Text style={styles.expDate}>{exp.startDate} - {exp.endDate || 'Present'}</Text>
              </View>
              <Text style={styles.expCompany}>{exp.company} | {exp.location}</Text>
              {Array.isArray(exp.description) && exp.description.slice(0, 2).map((desc, i) => (
                <Text key={i} style={styles.expDesc}>• {desc.substring(0, 80)}{desc.length > 80 ? '...' : ''}</Text>
              ))}
              <View style={styles.techContainer}>
                {exp.technologies.slice(0, 3).map((tech, i) => (
                  <Text key={i} style={styles.techItem}>{tech}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
        {certifications && certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {certifications.slice(0, 2).map((cert) => (
              <View key={cert.id} style={styles.certItem}>
                <Text style={styles.certName}>{cert.name}</Text>
                <Text style={styles.certIssuer}>{cert.issuer} | {cert.date}</Text>
              </View>
            ))}
          </View>
        )}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Projects</Text>
            {projects.slice(0, 2).map((project) => (
              <View key={project.id} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDesc}>{project.description.substring(0, 100)}{project.description.length > 100 ? '...' : ''}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </Page>
  </Document>
)

export async function generateResumePDF(): Promise<Blob> {
  const blob = await pdf(<PDFDocument />).toBlob()
  return blob
}

export function getResumeFileName(): string {
  const date = new Date().toISOString().split('T')[0]
  return `${profile.name.replace(/\s+/g, '_')}_Resume_${date}.pdf`
}
