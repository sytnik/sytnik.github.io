import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Publication {
  type: 'Article' | 'Conference';
  title: string;
  journal: string;
  year: number;
  doi: string;
  authors: string;
}

@Component({
  standalone: true,
  selector: 'app-scientific',
  imports: [CommonModule],
  styleUrl: './scientific.component.scss',
  templateUrl: './scientific.component.html',
})
export class ScientificComponent {
  publications: Publication[] = [
    { type: 'Article', title: 'Formation of a unified educational platform of a higher education institution challenges and development prospects', journal: 'Open Information and Computer Integrated Technologies', year: 2025, doi: '10.32620/oikit.2025.104.13', authors: 'Nosykov O. S., Sytnik O. O.' },
    { type: 'Article', title: 'Mathematical structures and tools of anthropocentric dispatching in HEIs', journal: 'Open Information and Computer Integrated Technologies', year: 2025, doi: '10.32620/oikit.2025.105.17', authors: 'Sytnik O. O., Vdovitchenko O. V.' },
    { type: 'Article', title: 'Anthropocentric model of class scheduling in aerospace profile institutions', journal: 'Aerospace Technic and Technology', year: 2025, doi: '10.32620/aktt.2025.6.07', authors: 'Sytnik O. O.' },
    { type: 'Article', title: 'Approach to business process dispatching in the operation of industrial facilities based on anthropocentricity', journal: 'Management Information System and Devices', year: 2026, doi: '10.30837/0135-1710.2026.189.247', authors: 'Sytnik O.' },
    { type: 'Article', title: 'Software system architecture for anthropocentric scheduling of educational workload in higher education institutions', journal: 'Problems in Programming', year: 2026, doi: '10.15407/pp2026.02.037', authors: 'Sytnik O.' },
    { type: 'Conference', title: 'Management of educational activities informatization projects integration', journal: 'International Scientific Conference', year: 2024, doi: '10.5281/ZENODO.19752932', authors: 'Sytnik O., Bondareva T.' },
    { type: 'Conference', title: 'Identification and analysis of factors influencing the scheduling process in the distance learning environment in Ukraine', journal: 'International Scientific Conference', year: 2024, doi: '10.5281/ZENODO.19741051', authors: 'Sytnik O., Vdovitchenko O.' },
    { type: 'Conference', title: 'Task scheduling algorithms application for online class schedule optimization', journal: 'International Scientific Conference', year: 2024, doi: '10.5281/ZENODO.19735554', authors: 'Sytnik O., Vdovitchenko O.' },
    { type: 'Conference', title: 'Problems of informatization of the educational process in HEIs', journal: 'International Scientific Conference', year: 2025, doi: '10.5281/ZENODO.19733024', authors: 'Sytnik O., Nosykov O.' },
    { type: 'Conference', title: 'Formation of the unified information space of the National Aerospace University challenges and development prospects', journal: 'International Scientific Conference', year: 2025, doi: '10.5281/ZENODO.19761615', authors: 'Sytnik O., Nosykov O.' },
    { type: 'Conference', title: 'Mathematical structures and tools of anthropocentric dispatching in HEIs', journal: 'International Scientific Conference', year: 2025, doi: '10.5281/ZENODO.19742124', authors: 'Sytnik O., Vdovitchenko O.' },
    { type: 'Conference', title: 'Ways to ensure the efficiency of class scheduling processes in higher education institutions', journal: 'International Scientific Conference', year: 2025, doi: '10.5281/ZENODO.19753355', authors: 'Sytnik O., Vdovitchenko O.' },
    { type: 'Conference', title: 'Gamification of operational learning management an anthropocentric interaction model', journal: 'International Scientific Conference', year: 2026, doi: '10.5281/ZENODO.20631638', authors: 'Sytnik O., Vdovitchenko O.' }
  ];
}

