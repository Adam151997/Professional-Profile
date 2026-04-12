'use client'

import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer'
import { profile, skillCategories } from '@/data/profile'
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
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  sidebar: {
    width: '30%',
    backgroundColor: '#0f172a',
    backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: 20,
    height: '100%',
  },
  main: {
    width: '70%',
    padding: 20,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  sidebarName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  sidebarTitle: {
    fontSize: 10,
    color: '#34d399',
    marginBottom: 24,
    fontWeight: 'medium',
  },
  sidebarSection: {
    marginBottom: 14,
  },
  sidebarSectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: '2 solid #34d399',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    lineHeight: 1.3,
  },
  contactItem: {
    fontSize: 8,
    color: '#cbd5e1',
    marginBottom: 4,
    lineHeight: 1.4,
  },
  skillItem: {
    fontSize: 8,
    color: '#cbd5e1',
    marginBottom: 4,
    paddingLeft: 4,
    lineHeight: 1.4,
  },
  summaryText: {
    fontSize: 9,
    color: '#475569',
    textAlign: 'justify',
    lineHeight: 1.4,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: '1 solid #e2e8f0',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    lineHeight: 1.3,
  },
  experienceItem: {
    marginBottom: 14,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  expTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#0f172a',
    flex: 1,
    lineHeight: 1.3,
  },
  expDate: {
    fontSize: 7,
    color: '#64748b',
    marginLeft: 8,
    fontWeight: 'medium',
    lineHeight: 1.3,
  },
  expCompany: {
    fontSize: 8,
    color: '#059669',
    marginBottom: 4,
    fontWeight: 'medium',
    lineHeight: 1.3,
  },
  expDesc: {
    fontSize: 7,
    color: '#475569',
    marginBottom: 4,
    lineHeight: 1.4,
  },
  certItem: {
    marginBottom: 10,
  },
  certName: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#0f172a',
    lineHeight: 1.3,
  },
  certIssuer: {
    fontSize: 7,
    color: '#64748b',
    marginTop: 2,
    lineHeight: 1.3,
  },
  projectItem: {
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderLeft: '2 solid #34d399',
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 2,
    lineHeight: 1.3,
  },
  projectDesc: {
    fontSize: 7,
    color: '#475569',
    marginTop: 3,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  projectTech: {
    fontSize: 6,
    color: '#64748b',
    marginTop: 2,
    marginBottom: 2,
    lineHeight: 1.3,
    fontWeight: 'medium',
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
          <Text style={styles.contactItem}>{profile.linkedin}</Text>
        </View>

        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Skills</Text>
          {skillCategories.map((category, catIndex) => (
            <View key={catIndex} style={{ marginBottom: 6 }}>
              <Text style={{ fontSize: 8, color: '#34d399', fontWeight: 'bold', marginBottom: 3, lineHeight: 1.3 }}>
                {category.category}
              </Text>
              {category.skills.map((skill, skillIndex) => (
                <Text key={skillIndex} style={styles.skillItem}>• {skill}</Text>
              ))}
            </View>
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
