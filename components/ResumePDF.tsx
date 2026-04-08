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
    fontSize: 10,
    lineHeight: 1.4,
  },
  // Left Sidebar (35%)
  sidebar: {
    width: '35%',
    backgroundColor: '#1e293b',
    padding: 20,
    height: '100%',
  },
  // Right Main Area (65%)
  main: {
    width: '65%',
    padding: 25,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  // Sidebar Styles
  sidebarName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  sidebarTitle: {
    fontSize: 11,
    color: '#10b981',
    marginBottom: 20,
  },
  sidebarSection: {
    marginBottom: 18,
  },
  sidebarSectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    paddingBottom: 4,
    borderBottom: '1 dashed #475569',
  },
  contactItem: {
    fontSize: 9,
    color: '#cbd5e1',
    marginBottom: 6,
  },
  skillItem: {
    fontSize: 9,
    color: '#cbd5e1',
    marginBottom: 4,
    paddingLeft: 8,
  },
  // Main Area Styles
  mainHeader: {
    marginBottom: 15,
  },
  mainName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 3,
  },
  mainTitle: {
    fontSize: 12,
    color: '#10b981',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 9,
    color: '#475569',
    textAlign: 'justify',
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
    paddingBottom: 4,
    borderBottom: '1 dashed #cbd5e1',
  },
  experienceItem: {
    marginBottom: 12,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  expTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  expDate: {
    fontSize: 8,
    color: '#64748b',
  },
  expCompany: {
    fontSize: 9,
    color: '#10b981',
    marginBottom: 4,
  },
  expDescription: {
    fontSize: 8,
    color: '#475569',
    textAlign: 'justify',
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  techItem: {
    fontSize: 7,
    backgroundColor: '#f1f5f9',
    color: '#64748b',
    padding: '2 6',
    marginRight: 4,
    marginBottom: 2,
    borderRadius: 2,
  },
  certItem: {
    marginBottom: 8,
  },
  certName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  certIssuer: {
    fontSize: 8,
    color: '#64748b',
  },
  projectItem: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeft: '2 solid #10b981',
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  projectDesc: {
    fontSize: 8,
    color: '#475569',
    marginTop: 2,
  },
})

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Left Sidebar - Dark Background */}
      <View style={styles.sidebar}>
        {/* Name & Title */}
        <View style={{ marginBottom: 25 }}>
          <Text style={styles.sidebarName}>{profile.name}</Text>
          <Text style={styles.sidebarTitle}>{profile.title}</Text>
        </View>

        {/* Contact Info */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Contact</Text>
          <Text style={styles.contactItem}>{profile.email}</Text>
          <Text style={styles.contactItem}>{profile.phone}</Text>
          <Text style={styles.contactItem}>{profile.location}</Text>
          <Text style={styles.contactItem}>{profile.linkedin}</Text>
        </View>

        {/* Skills */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Skills</Text>
          {skills.map((skill, index) => (
            <Text key={index} style={styles.skillItem}>• {skill}</Text>
          ))}
        </View>
      </View>

      {/* Right Main Area - White Background */}
      <View style={styles.main}>
        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{profile.bio}</Text>
        </View>

        {/* Experience */}
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
                <View>
                  {exp.description.slice(0, 2).map((desc, i) => (
                    <Text key={i} style={styles.expDescription}>• {desc}</Text>
                  ))}
                </View>
              ) : (
                <Text style={styles.expDescription}>{exp.description}</Text>
              )}
              <View style={styles.techContainer}>
                {exp.technologies.slice(0, 4).map((tech, i) => (
                  <Text key={i} style={styles.techItem}>{tech}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {certifications.slice(0, 3).map((cert) => (
              <View key={cert.id} style={styles.certItem}>
                <Text style={styles.certName}>{cert.name}</Text>
                <Text style={styles.certIssuer}>{cert.issuer} | {cert.date}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Featured Projects */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Projects</Text>
            {projects.slice(0, 2).map((project) => (
              <View key={project.id} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDesc}>{project.description}</Text>
                <Text style={styles.expDescription}>Tech: {project.technologies.slice(0, 3).join(', ')}</Text>
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
