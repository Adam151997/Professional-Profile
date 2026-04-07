'use client'

import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer'
import { profile, skills } from '@/data/profile'
import { experiences } from '@/data/experience'
import { projects } from '@/data/projects'
import { certifications } from '@/data/certifications'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  contact: {
    fontSize: 9,
    color: '#666',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: '1 solid #ddd',
    color: '#1a1a1a',
  },
  item: {
    marginBottom: 8,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  itemSubtitle: {
    color: '#444',
    fontSize: 10,
  },
  itemDate: {
    fontSize: 9,
    color: '#666',
  },
  description: {
    fontSize: 9,
    color: '#555',
    marginTop: 4,
    textAlign: 'justify',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skill: {
    fontSize: 9,
    backgroundColor: '#f0f0f0',
    padding: '4 8',
    borderRadius: 3,
  },
  projectLinks: {
    fontSize: 9,
    color: '#0066cc',
    marginTop: 4,
  },
  certBadge: {
    fontSize: 9,
    padding: '4 8',
    backgroundColor: '#e8f4f8',
    borderRadius: 3,
  },
})

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.title}>{profile.title}</Text>
        <Text style={styles.contact}>
          {profile.email} | {profile.phone} | {profile.location} | {profile.linkedin}
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.description}>{profile.bio}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill) => (
            <Text key={skill} style={styles.skill}>{skill}</Text>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experiences.map((exp) => (
          <View key={exp.id} style={styles.item}>
            <View style={styles.itemHeader}>
              <View>
                <Text style={styles.itemTitle}>{exp.title}</Text>
                <Text style={styles.itemSubtitle}>{exp.company} | {exp.location}</Text>
              </View>
              <Text style={styles.itemDate}>
                {exp.startDate} - {exp.endDate || 'Present'}
              </Text>
            </View>
            <Text style={styles.description}>{exp.description}</Text>
            <Text style={styles.description}>Technologies: {exp.technologies.join(', ')}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.map((project) => (
          <View key={project.id} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{project.title}</Text>
            </View>
            <Text style={styles.description}>{project.description}</Text>
            <Text style={styles.projectLinks}>
              Tech: {project.technologies.join(', ')} | {project.githubUrl}
            </Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {certifications.map((cert) => (
          <View key={cert.id} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{cert.name}</Text>
              <Text style={styles.itemDate}>{cert.date}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{cert.issuer}</Text>
            <Text style={styles.description}>ID: {cert.credentialId}</Text>
          </View>
        ))}
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