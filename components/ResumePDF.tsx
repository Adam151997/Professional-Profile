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
    fontSize: 8,
    lineHeight: 1.2,
    backgroundColor: '#ffffff',
  },
  sidebar: {
    width: '32%',
    backgroundColor: '#0f172a',
    padding: 15,
    height: '100%',
  },
  main: {
    width: '68%',
    padding: 18,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  sidebarName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  sidebarTitle: {
    fontSize: 8,
    color: '#34d399',
    marginBottom: 20,
  },
  sidebarSection: {
    marginBottom: 14,
  },
  sidebarSectionTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
    paddingBottom: 3,
    borderBottom: '1 dashed #334155',
  },
  contactItem: {
    fontSize: 7,
    color: '#94a3b8',
    marginBottom: 3,
  },
  skillItem: {
    fontSize: 7,
    color: '#cbd5e1',
    marginBottom: 2,
    paddingLeft: 4,
  },
  summaryText: {
    fontSize: 8,
    color: '#475569',
    textAlign: 'justify',
    lineHeight: 1.3,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
    paddingBottom: 2,
    borderBottom: '1 dashed #cbd5e1',
  },
  experienceItem: {
    marginBottom: 8,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  expTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: 1,
  },
  expDate: {
    fontSize: 6,
    color: '#64748b',
    marginLeft: 6,
  },
  expCompany: {
    fontSize: 7,
    color: '#059669',
    marginBottom: 2,
  },
  expDesc: {
    fontSize: 6,
    color: '#475569',
    marginBottom: 1,
    lineHeight: 1.2,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  techItem: {
    fontSize: 5,
    backgroundColor: '#f1f5f9',
    color: '#64748b',
    padding: '1 3',
    marginRight: 2,
    marginBottom: 1,
    borderRadius: 1,
  },
  certItem: {
    marginBottom: 4,
  },
  certName: {
    fontSize: 7,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  certIssuer: {
    fontSize: 6,
    color: '#64748b',
  },
  projectItem: {
    marginBottom: 6,
    paddingLeft: 6,
    borderLeft: '2 solid #34d399',
  },
  projectTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  projectDesc: {
    fontSize: 6,
    color: '#475569',
    marginTop: 1,
    lineHeight: 1.2,
  },
  projectTech: {
    fontSize: 5,
    color: '#64748b',
    marginTop: 1,
  },
})

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.sidebar}>
        <View style={{ marginBottom: 18 }}>
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
          {experiences.map((exp) => (
            <View key={exp.id} style={styles.experienceItem}>
              <View style={styles.expHeader}>
                <Text style={styles.expTitle}>{exp.position}</Text>
                <Text style={styles.expDate}>{exp.startDate} - {exp.endDate || 'Present'}</Text>
              </View>
              <Text style={styles.expCompany}>{exp.company} | {exp.location}</Text>
              {Array.isArray(exp.description) ? (
                exp.description.map((desc, i) => (
                  <Text key={i} style={styles.expDesc}>• {desc}</Text>
                ))
              ) : (
                <Text style={styles.expDesc}>{exp.description}</Text>
              )}
              {exp.technologies.length > 0 && (
                <View style={styles.techContainer}>
                  {exp.technologies.map((tech, i) => (
                    <Text key={i} style={styles.techItem}>{tech}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {certifications && certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {certifications.map((cert) => (
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
            {projects.map((project) => (
              <View key={project.id} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDesc}>{project.description}</Text>
                {project.technologies.length > 0 && (
                  <Text style={styles.projectTech}>Technologies: {project.technologies.join(', ')}</Text>
                )}
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
