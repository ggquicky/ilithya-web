import type { Language } from './ui';

export interface LegalSection {
  id: string;
  badge?: string;
  title: string;
  content: string[];
  bulletPoints?: string[];
  highlightBox?: {
    title: string;
    text: string;
  };
}

export interface LegalDocument {
  metaTitle: string;
  metaDesc: string;
  keywords?: string;
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  summaryCards: {
    icon: string;
    title: string;
    desc: string;
  }[];
  tableData?: {
    headerCategory: string;
    headerProcessed: string;
    headerStored: string;
    headerPurpose: string;
    rows: {
      category: string;
      processed: string;
      stored: string;
      purpose: string;
    }[];
  };
  sections: LegalSection[];
  contactCta: {
    title: string;
    desc: string;
    email: string;
    btnText: string;
  };
}

export interface LegalData {
  privacy: LegalDocument;
  terms: LegalDocument;
}

export const legalTranslations: Record<Language, LegalData> = {
  es: {
    privacy: {
      metaTitle: 'Política de Privacidad y Tratamiento de Información | Ilithya Workflow',
      metaDesc: 'Conozca qué datos procesa Ilithya Workflow, qué información almacenamos para fines de no repudio y auditoría legal, y nuestras garantías de confidencialidad.',
      keywords: 'politica de privacidad, tratamiento de datos, encargado del tratamiento, data processor, no repudio legal, log criptografico sha256, autoarchivado 30 dias, proteccion datos personales, rgpd, lgpd',
      badge: 'Gobernanza de Datos & Seguridad Jurídica',
      title: 'Política de Privacidad y Tratamiento de Información',
      subtitle: 'Transparencia total sobre qué información leemos, qué datos almacenamos con fines legales y cómo blindamos la soberanía documental de su empresa.',
      lastUpdated: 'Vigente a partir del 25 de Octubre de 2026',
      summaryCards: [
        {
          icon: 'shield',
          title: 'Rol de Encargado (Data Processor)',
          desc: 'Su organización mantiene la titularidad exclusiva de los documentos. Ilithya procesa la información únicamente según sus instrucciones operativas.'
        },
        {
          icon: 'database',
          title: 'Auto-Archivado a 30 Días',
          desc: 'Los documentos en tránsito residen en caché segura por 30 días y se transfieren a su propio Google Drive o OneDrive corporativo.'
        },
        {
          icon: 'lock',
          title: 'Huella Criptográfica SHA-256',
          desc: 'Conservamos únicamente los hashes y marcas de tiempo forenses para sustentar el no repudio y blindarlo ante auditorías y litigios.'
        },
        {
          icon: 'ban',
          title: 'Cero Venta y Cero Entrenamiento IA',
          desc: 'Nunca comercializamos información confidencial ni utilizamos sus contratos o documentos para entrenar modelos de Inteligencia Artificial.'
        }
      ],
      tableData: {
        headerCategory: 'Categoría de Información',
        headerProcessed: '¿Qué información leemos en tránsito?',
        headerStored: '¿Qué información almacenamos?',
        headerPurpose: 'Propósito y Fundamento Legal',
        rows: [
          {
            category: 'Contenido Documental (PDF)',
            processed: 'Texto visual del PDF, folio, coordenadas de firma y sellos.',
            stored: 'Caché temporal cifrada durante el flujo activo (máximo 30 días). Luego transferido al almacenamiento corporativo del Cliente.',
            purpose: 'Ejecución del servicio de aprobación y estampado de firmas digitales en las coordenadas milimétricas exactas.'
          },
          {
            category: 'Pistas Forenses de Auditoría',
            processed: 'Dirección IP pública, navegador/User-Agent, marca temporal UTC y hashes del archivo.',
            stored: 'Log inmutable con hash SHA-256, estampa de tiempo UTC, IP de origen y estado de la decisión (conservado como prueba legal).',
            purpose: 'Garantizar el principio de No Repudio (non-repudiation) y validez probatoria ante auditorías fiscales, laborales o mercantiles.'
          },
          {
            category: 'Identidad del Firmante',
            processed: 'Nombre completo, correo corporativo, cargo y token de sesión SSO (Google Workspace / Microsoft 365).',
            stored: 'Nombre, cargo y correo corporativo vinculados a la estampa visual del documento y al registro del flujo.',
            purpose: 'Atribución fidedigna de la firma a la persona autorizada, evitando suplantación de identidad.'
          },
          {
            category: 'Comentarios y Notificaciones',
            processed: 'Observaciones internas formuladas durante la revisión del expediente.',
            stored: 'Historial de notas del proceso adjunto al expediente final hasta su archivado definitivo.',
            purpose: 'Trazabilidad y contexto de decisiones para auditoría interna corporativa.'
          }
        ]
      },
      sections: [
        {
          id: 'responsable-encargado',
          badge: 'Cláusula 1',
          title: '1. Relación Jurídica: Responsable vs. Encargado del Tratamiento',
          content: [
            'En el marco de las leyes de protección de datos personales aplicables (incluyendo RGPD/GDPR, LGPD de Brasil, LFPDPPP de México, Ley 1581 de Colombia y normativas homólogas en América Latina y los Estados Unidos), se establece con absoluta claridad la distinción de roles:',
            'a) La Empresa Cliente actúa en calidad de Responsable del Tratamiento (Data Controller). Es la única entidad facultada para decidir qué documentos, contratos, solicitudes o datos de colaboradores o proveedores se incorporan a la plataforma.',
            'b) Ilithya Workflow actúa en calidad de Encargado del Tratamiento (Data Processor). Procesa la información técnica, documental y personal única y exclusivamente en nombre, por cuenta y siguiendo las instrucciones operativas de la Empresa Cliente, para la ejecución del servicio SaaS contratado.'
          ],
          highlightBox: {
            title: 'Soberanía y Propiedad Absoluta',
            text: 'Ilithya Workflow no adquiere derecho, título ni licencia alguna sobre los contenidos, datos comerciales o secretos industriales plasmados en los documentos gestionados en la plataforma.'
          }
        },
        {
          id: 'datos-leidos',
          badge: 'Cláusula 2',
          title: '2. Qué Información Leemos en Tránsito',
          content: [
            'Para que la plataforma orqueste flujos secuenciales y estampe firmas en coordenadas exactas, nuestro motor realiza lecturas técnicas automáticas y estrictamente delimitadas:',
            '• Metadatos del Documento: Dimensiones de página, orientación, folio asignado, hash SHA-256 original y coordenadas de destino de los sellos visuales.',
            '• Datos de Aprobadores: Credenciales corporativas validadas mediante Single Sign-On (OAuth 2.0 con Google Workspace o Microsoft 365), incluyendo nombre, correo y rol institucional.',
            '• Renderizado Seguro: Visualización web temporal del PDF para que el usuario firmante pueda examinar el expediente antes de otorgar su consentimiento.'
          ]
        },
        {
          id: 'datos-almacenados-fines',
          badge: 'Cláusula 3',
          title: '3. Qué Información Almacenamos y Para Qué Fines Legales',
          content: [
            'Con el fin primordial de dotar a las aprobaciones de plena certeza jurídica, validez ante terceros y evitar demandas, disputas de autoría o fraude, Ilithya Workflow genera y almacena:',
            '1. Registro de Auditoría Criptográfica Inmutable: Por cada acción de firma o rechazo se registra de manera indeleble la marca temporal UTC, la dirección IP de origen, el identificador único del firmante y el hash criptográfico SHA-256.',
            '2. Fundamento Legal de Conservación (No Repudio): La retención del registro de auditoría es indispensable para sustentar que una firma no puede ser legalmente repudiada por el firmante (principio de no repudio contemplado en la Ley Modelo de la CNUDMI/UNCITRAL, ESIGN Act y eIDAS).',
            '3. Prevención de Demandas y Controversias: En caso de controversia laboral, comercial o tributaria, este registro constituye la prueba técnica de descargo que demuestra la autenticidad e integridad del proceso.'
          ]
        },
        {
          id: 'politica-retencion-30-dias',
          badge: 'Cláusula 4',
          title: '4. Política de Retención y Auto-Archivado a 30 Días',
          content: [
            'A diferencia de otros proveedores que retienen indefinidamente documentos corporativos en nubes propietarias para incrementar costos, Ilithya Workflow implementa una arquitectura de custodia limpia y liviana:',
            '• Almacenamiento en Caliente (Hot Storage): Durante el proceso activo de revisión y hasta por un máximo de treinta (30) días calendario, los PDFs permanecen en almacenamiento temporal cifrado con aislamiento multi-inquilino RLS.',
            '• Auto-Archivado hacia la Nube del Cliente: Al concluir la última estación o cumplirse el plazo de 30 días, el sistema transfiere de forma automática y verificada el expediente final al repositorio corporativo de la Empresa Cliente (Google Drive o Microsoft OneDrive).',
            '• Purga de Caché: Tras verificar la correcta transferencia a la nube del cliente, el contenido del PDF es purgado de los servidores calientes de Ilithya, conservándose únicamente la pista técnica de auditoría (metadatos y hashes) para fines de certificación legal.'
          ],
          highlightBox: {
            title: 'Custodia Propia del Cliente',
            text: 'Una vez transferido a su Google Drive o OneDrive, el expediente reside bajo las políticas de gobernanza, retención y respaldo propias de su empresa.'
          }
        },
        {
          id: 'cero-comercializacion-cero-ia',
          badge: 'Cláusula 5',
          title: '5. Garantía Categórica: Cero Comercialización y Cero Entrenamiento de IA',
          content: [
            'Ilithya Workflow asume compromisos vinculantes e inquebrantables respecto a la confidencialidad:',
            '• Prohibición Absoluta de Venta o Cesión: Jamás venderemos, alquilaremos, cederemos ni compartiremos documentos, datos de contacto ni información financiera de nuestros clientes con intermediarios de datos, agencias de publicidad o entidades comerciales.',
            '• Prohibición de Entrenamiento de Inteligencia Artificial: Ningún dato, contrato, cláusula, factura ni registro de colaboradores procesado en Ilithya será utilizado para entrenar, afinar o alimentar modelos de lenguaje grande (LLMs) ni algoritmos de inteligencia artificial propios o de terceros.'
          ]
        },
        {
          id: 'seguridad-tecnica',
          badge: 'Cláusula 6',
          title: '6. Medidas de Seguridad y Aislamiento Técnico',
          content: [
            'Para garantizar la confidencialidad, integridad y disponibilidad de la información, implementamos controles de nivel corporativo:',
            '• Cifrado Robusto: Cifrado en tránsito mediante protocolos TLS 1.3 con suites criptográficas modernas, y cifrado en reposo bajo estándar AES-256.',
            '• Aislamiento Multi-Inquilino (RLS): Separación lógica estricta a nivel de base de datos mediante PostgreSQL Row-Level Security, impidiendo cualquier cruce o acceso inadvertido entre distintas empresas u organizaciones.',
            '• Control de Acceso Granular (RBAC): Políticas de privilegios mínimos para que solo los aprobadores formalmente designados puedan acceder a cada expediente.'
          ]
        },
        {
          id: 'derechos-arco-contacto',
          badge: 'Cláusula 7',
          title: '7. Derechos de los Titulares y Contacto Legal',
          content: [
            'Los titulares cuyos datos de cuenta corporativa residan en Ilithya pueden ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO / GDPR) escribiendo directamente a nuestra mesa corporativa de privacidad:',
            'Para consultas relativas a datos incorporados dentro de documentos de una Empresa Cliente, Ilithya canalizará la solicitud con el Responsable del Tratamiento respectivo.'
          ]
        }
      ],
      contactCta: {
        title: '¿Dudas sobre Privacidad o Cumplimiento?',
        desc: 'Nuestro oficial de privacidad y cumplimiento está a su disposición para formalizar acuerdos de procesamiento de datos (DPA).',
        email: 'privacidad@ilithya.app',
        btnText: 'Contactar al Oficial de Privacidad'
      }
    },
    terms: {
      metaTitle: 'Términos del Servicio y Exención de Responsabilidad | Ilithya Workflow',
      metaDesc: 'Términos legales de uso de Ilithya Workflow, validez de la firma digital, delimitación estricta de responsabilidades, cap indemnizatorio y resolución de controversias.',
      keywords: 'terminos del servicio saas, validez legal firma electronica, ley modelo cnudmi, esign ueta eidas, exencion responsabilidad contratos, arbitraje comercial vinculante',
      badge: 'Condiciones Generales de Contratación SaaS',
      title: 'Términos del Servicio y Exención de Responsabilidad',
      subtitle: 'Contrato de licencia B2B, alcance de la firma electrónica y delimitación estricta de responsabilidades para salvaguarda jurídica recíproca.',
      lastUpdated: 'Vigente a partir del 25 de Octubre de 2026',
      summaryCards: [
        {
          icon: 'file-check',
          title: 'Validez Legal de Firma',
          desc: 'Firmas electrónicas y sellos con trazabilidad completa conforme a la Ley Modelo CNUDMI, ESIGN, UETA y eIDAS.'
        },
        {
          icon: 'alert-triangle',
          title: 'Tercero Ajeno al Negocio',
          desc: 'Ilithya provee la herramienta tecnológica pero no forma parte de los contratos, compras o acuerdos suscritos entre usuarios.'
        },
        {
          icon: 'scale',
          title: 'Tope de Responsabilidad (Cap)',
          desc: 'La responsabilidad máxima acumulada se limita a los importes efectivamente pagados en los 12 meses previos al reclamo.'
        },
        {
          icon: 'gavel',
          title: 'Arbitraje y Renuncia a Demandas Colectivas',
          desc: 'Resolución de disputas mediante negociación previa de buena fe y arbitraje comercial vinculante sin litigios colectivos.'
        }
      ],
      sections: [
        {
          id: 'naturaleza-b2b',
          badge: 'Sección 1',
          title: '1. Naturaleza del Servicio y Capacidad de Contratación',
          content: [
            'Ilithya Workflow es una solución tecnológica de software como servicio (SaaS) orientada al segmento empresarial (Business-to-Business / B2B) para la orquestación, revisión, trazabilidad y estampado de firmas electrónicas sobre documentos PDF.',
            'Al acceder, registrarse o utilizar la plataforma, la persona física o jurídica que contrata o evalúa el servicio declara contar con la personería, representación legal y facultades necesarias para obligar a su organización a estos Términos.'
          ]
        },
        {
          id: 'validez-firmas',
          badge: 'Sección 2',
          title: '2. Firma Electrónica, Sellado Milimétrico y No Repudio',
          content: [
            'Ilithya Workflow genera firmas electrónicas y sellos de aprobación basados en estándares criptográficos internacionales (marcas de tiempo, hashes SHA-256 e IP de origen) concebidos para gozar de equivalencia funcional y eficacia probatoria plena bajo:',
            '• La Ley Modelo de la CNUDMI/UNCITRAL sobre Comercio Electrónico y Firmas Electrónicas.',
            '• El Electronic Signatures in Global and National Commerce Act (ESIGN) y Uniform Electronic Transactions Act (UETA) en EE.UU.',
            '• El Reglamento eIDAS (Reglamento UE 910/2014) en relación con firmas electrónicas avanzadas.',
            '• Los Códigos de Comercio, leyes de mensajes de datos y decretos de firma electrónica en México, Colombia, Chile, Perú, Argentina y Brasil (Medida Provisória 2.200-2).'
          ]
        },
        {
          id: 'exencion-negocio-subyacente',
          badge: 'Sección 3',
          title: '3. Exención de Responsabilidad sobre los Actos y Negocios Subyacentes',
          content: [
            'Para prevenir demandas infundadas o vinculaciones indebidas, se establece de manera expresa:',
            'a) Ilithya NO es parte de ninguna transacción: Ilithya actúa estrictamente como intermediario tecnológico imparcial. En ningún caso Ilithya será considerada parte, aval, testigo contractual ni garante de los contratos, compras, despidos, contrataciones o autorizaciones aprobados en la plataforma.',
            'b) Idoneidad y Formalidades Legales: Es responsabilidad única y exclusiva del Cliente determinar si el acto o contrato particular admite la firma electrónica conforme a la legislación local de su país, o si la ley impone formalidades solemnes no susceptibles de firma digital (tales como testamentos, actos de derecho de familia o escrituras públicas notariales de inmuebles).',
            'c) Autenticidad de Contenidos: Ilithya no fiscaliza, valida ni certifica la veracidad, legitimidad o licitud de los textos, montos presupuestarios o anexos cargados por los usuarios.'
          ],
          highlightBox: {
            title: 'Exclusión Expresa de Responsabilidad Sustantiva',
            text: 'Ilithya desconoce y se deslinda de cualquier disputa entre la Empresa Cliente y sus proveedores, empleados, socios comerciales o autoridades fiscales respecto al cumplimiento o incumplimiento de los contratos tramitados en el sistema.'
          }
        },
        {
          id: 'seguridad-credenciales',
          badge: 'Sección 4',
          title: '4. Custodia de Credenciales y Presunción de Autoría',
          content: [
            'El Cliente y sus usuarios autorizados son los únicos responsables de resguardar la confidencialidad de sus credenciales, contraseñas y dispositivos de acceso a sus cuentas corporativas (Google Workspace o Microsoft 365).',
            'Toda firma o aprobación estampada haciendo uso de credenciales corporativas legítimas se presumirá legalmente emitida por su titular autorizado, liberando a Ilithya de cualquier reclamo por negligencia interna o delegación indebida de accesos por parte del Cliente.'
          ]
        },
        {
          id: 'limitacion-responsabilidad',
          badge: 'Sección 5',
          title: '5. Limitación Estricta de Responsabilidad e Indemnización',
          content: [
            'Con el propósito de acotar contingencias y demandas:',
            '• Exclusión de Daños Consecuenciales e Indirectos: En ningún caso Ilithya, sus accionistas, directivos o empleados serán responsables ante el Cliente ni ante terceros por daños indirectos, incidentales, punitivos, lucro cesante, pérdida de ingresos, pérdida de reputación o costo de sustitución de servicios.',
            '• Límite Máximo Indemnizatorio (Cap de Responsabilidad): La responsabilidad civil o patrimonial total y agregada de Ilithya frente al Cliente por cualquier reclamación derivada o relacionada con este contrato estará expresamente limitada al monto total efectivamente abonado por el Cliente a Ilithya durante los doce (12) meses inmediatamente anteriores al hecho que dio origen al reclamo (o a cero dólares estadounidenses $0 USD en planes de prueba gratuita o piloto).'
          ]
        },
        {
          id: 'indemnizacion-cliente',
          badge: 'Sección 6',
          title: '6. Deber de Indemnización del Cliente',
          content: [
            'El Cliente se compromete expresamente a defender, indemnizar y sacar en paz y a salvo a Ilithya, sus directores y empleados, frente a cualquier demanda, reclamación, inspección laboral, sanción administrativa o gasto judicial (incluyendo honorarios razonables de abogados) promovido por terceros que derive de:',
            '1. La ilicitud, falsedad o infracción legal del contenido de los documentos incorporados por sus usuarios.',
            '2. Conflictos laborales o demandas contractuales entre el Cliente y sus colaboradores o proveedores.',
            '3. La violación de estos Términos o de las leyes de protección de datos atribuible al Cliente.'
          ]
        },
        {
          id: 'arbitraje-renuncia',
          badge: 'Sección 7',
          title: '7. Negociación Previa, Arbitraje y Renuncia a Demandas Colectivas',
          content: [
            '• Período de Negociación Amistosa: Ante cualquier diferencia o controversia, las partes se comprometen a iniciar un período de negociación directa de buena fe por un lapso no menor a treinta (30) días hábiles.',
            '• Arbitraje Comercial Vinculante: En caso de no alcanzarse un acuerdo, la controversia se resolverá definitivamente mediante arbitraje comercial conforme al reglamento del Centro de Arbitraje competente, con carácter vinculante e inapelable.',
            '• Renuncia Expresa a Demandas Colectivas (Class Action Waiver): El Cliente acepta que cualquier reclamo se sustanciará única y exclusivamente a título individual, renunciando formalmente a promover o formar parte de demandas colectivas, arbitrajes colectivos o acciones de grupo contra Ilithya.'
          ]
        }
      ],
      contactCta: {
        title: 'Mesa de Asesoría Legal y Corporativa',
        desc: 'Para requerimientos notariales, adendas contractuales corporativas o acuerdos de nivel de servicio específicos, comuníquese con nuestra dirección legal.',
        email: 'legal@ilithya.app',
        btnText: 'Contactar al Equipo Legal'
      }
    }
  },
  en: {
    privacy: {
      metaTitle: 'Privacy Policy & Enterprise Data Processing | Ilithya Workflow',
      metaDesc: 'Learn what data Ilithya Workflow processes, what information we retain for legal non-repudiation and audit purposes, and our zero-AI training guarantees.',
      keywords: 'privacy policy, data processing agreement, data processor role, legal non-repudiation, sha256 cryptographic audit, 30 day cloud auto archive, personal data protection, gdpr compliance, b2b data security',
      badge: 'Data Governance & Legal Security',
      title: 'Privacy Policy & Data Processing Notice',
      subtitle: 'Complete transparency on the data we process, the forensic records we retain for legal non-repudiation, and how we protect your organization’s documentary sovereignty.',
      lastUpdated: 'Effective Date: October 25, 2026',
      summaryCards: [
        {
          icon: 'shield',
          title: 'Data Processor Role',
          desc: 'Your organization retains exclusive ownership of all documents. Ilithya processes data strictly according to your operational instructions.'
        },
        {
          icon: 'database',
          title: '30-Day Auto-Archiving',
          desc: 'In-transit documents reside in secure temporary hot storage for up to 30 days and auto-transfer to your own Google Drive or OneDrive.'
        },
        {
          icon: 'lock',
          title: 'SHA-256 Cryptographic Audit',
          desc: 'We retain immutable forensic hashes and UTC timestamps to ensure legal non-repudiation and shield against disputes and audits.'
        },
        {
          icon: 'ban',
          title: 'Zero Data Sales & Zero AI Training',
          desc: 'We never monetize your business data and strictly forbid using your contracts or confidential files to train artificial intelligence models.'
        }
      ],
      tableData: {
        headerCategory: 'Information Category',
        headerProcessed: 'What data do we read in transit?',
        headerStored: 'What data do we store?',
        headerPurpose: 'Legal Purpose & Basis',
        rows: [
          {
            category: 'Documentary Content (PDF)',
            processed: 'Visual text of the PDF, requisition folios, signature placement coordinates.',
            stored: 'Encrypted temporary cache during the active workflow (max 30 days). Automatically transferred to Customer corporate storage.',
            purpose: 'Execution of document approval and high-precision digital signature placement on millimeter coordinates.'
          },
          {
            category: 'Forensic Audit Trails',
            processed: 'Public IP address, browser/User-Agent, UTC timestamp, and SHA-256 document checksums.',
            stored: 'Immutable audit log linking SHA-256 hash, UTC timestamp, origin IP, and decision status (retained as legal evidence).',
            purpose: 'Enforcing Non-Repudiation and statutory evidentiary admissibility under commercial, tax, and labor dispute frameworks.'
          },
          {
            category: 'Signer Identity',
            processed: 'Full name, corporate email, role/title, and SSO identity token (Google Workspace / Microsoft 365).',
            stored: 'Name, title, and corporate email permanently embedded in visual signature stamps and audit certificates.',
            purpose: 'Unambiguous attribution of approvals to designated officers, eliminating identity impersonation.'
          },
          {
            category: 'Internal Review Comments',
            processed: 'Contextual review notes and queries exchanged during the approval process.',
            stored: 'Threaded audit notes accompanying the finished dossier until archival transfer.',
            purpose: 'Traceability and internal corporate governance review readiness.'
          }
        ]
      },
      sections: [
        {
          id: 'responsable-encargado',
          badge: 'Clause 1',
          title: '1. Legal Relationship: Data Controller vs. Data Processor',
          content: [
            'Under applicable data protection frameworks (including EU GDPR, UK GDPR, California CCPA/CPRA, Brazilian LGPD, and equivalent international legislation), roles are strictly delineated:',
            'a) The Customer Organization acts as the Data Controller. The Customer determines which documents, contracts, personnel files, or supplier invoices are uploaded, who must approve them, and the categories of personal data processed.',
            'b) Ilithya Workflow acts strictly as the Data Processor. Ilithya processes technical, documentary, and personal information solely on behalf of, and pursuant to the documented operational instructions of, the Customer to deliver the B2B SaaS platform.'
          ],
          highlightBox: {
            title: 'Absolute Customer Ownership',
            text: 'Ilithya Workflow claims no ownership, title, or intellectual property rights over any customer documents, confidential information, or trade secrets processed through the platform.'
          }
        },
        {
          id: 'datos-leidos',
          badge: 'Clause 2',
          title: '2. What Information We Read in Transit',
          content: [
            'To orchestrate approval routes and stamp signatures on precise millimeter coordinates, our engine performs automated, strictly bounded technical operations:',
            '• Document Metadata: Page dimensions, orientation, assigned tracking folio, original SHA-256 pre-signature checksum, and target signature placement coordinates.',
            '• Signer Identity Data: Corporate SSO credentials authenticated via OAuth 2.0 (Google Workspace or Microsoft 365), including full name, business email, and designated enterprise role.',
            '• Secure In-Memory Rendering: Ephemeral browser preview rendering allowing signers to inspect the document before executing legal approval.'
          ]
        },
        {
          id: 'datos-almacenados-fines',
          badge: 'Clause 3',
          title: '3. What Information We Store and Legal Defenses (Anti-Lawsuit Protection)',
          content: [
            'To provide enterprise approvals with undeniable legal validity, shield our customers from vendor/employee repudiation, and defend against lawsuits, Ilithya Workflow generates and stores:',
            '1. Immutable Cryptographic Audit Log: For every signature, stamp, or rejection, an indelible record is captured containing the UTC timestamp, origin public IP address, authenticated user ID, and SHA-256 cryptographic hash of the document.',
            '2. Non-Repudiation Legal Grounding: Maintaining this cryptographic ledger is legally essential under the UNCITRAL Model Law on Electronic Commerce, the US ESIGN Act / UETA, and the EU eIDAS regulation to prevent signers from fraudulently claiming they never signed or authorized the transaction.',
            '3. Dispute & Audit Defense: In the event of tax audits, labor arbitrations, or breach of contract claims, this forensic evidence trail serves as irrefutable technical proof of transaction integrity.'
          ]
        },
        {
          id: 'politica-retencion-30-dias',
          badge: 'Clause 4',
          title: '4. 30-Day Retention Policy and Cloud Auto-Archiving',
          content: [
            'Unlike legacy signature platforms that lock your corporate documents in proprietary cloud silos to extract recurring storage fees, Ilithya Workflow implements a clean customer-first custody model:',
            '• Hot Storage Processing Cache: Completed or in-transit PDF files are retained in encrypted temporary storage with PostgreSQL Row-Level Security (RLS) for up to thirty (30) days.',
            '• Automated Transfer to Customer Cloud: Upon completion or on day 30, the system automatically transfers the sealed document bundle directly into the Customer’s corporate repository (Google Drive or Microsoft OneDrive).',
            '• Hot Cache Purge: Once verified transfer to the Customer’s cloud is confirmed, the PDF binary is permanently purged from Ilithya’s hot processing servers. Ilithya retains only the lightweight cryptographic audit log (hashes, timestamps, and IP logs) required for legal certification.'
          ],
          highlightBox: {
            title: 'Your Cloud, Your Custody',
            text: 'Once transferred to your Google Drive or Microsoft OneDrive, document retention, archiving, and disposition remain 100% under your internal enterprise governance.'
          }
        },
        {
          id: 'cero-comercializacion-cero-ia',
          badge: 'Clause 5',
          title: '5. Ironclad Guarantee: Zero Data Monetization & Zero AI Training',
          content: [
            'Ilithya Workflow establishes strict, legally binding confidentiality commitments:',
            '• Absolute Ban on Data Sales: We never sell, rent, lease, or monetize customer documents, employee contacts, or financial figures with data brokers, ad networks, or third parties.',
            '• Absolute Ban on AI Model Training: No customer document, invoice, contractual clause, or personal record processed in Ilithya will ever be utilized to train, fine-tune, or calibrate public or proprietary Large Language Models (LLMs) or artificial intelligence algorithms.'
          ]
        },
        {
          id: 'seguridad-tecnica',
          badge: 'Clause 6',
          title: '6. Technical Security & Database Isolation',
          content: [
            'To safeguard confidentiality and prevent data breaches:',
            '• Enterprise Encryption: Full data encryption in transit via TLS 1.3 with modern cryptographic cipher suites, and AES-256 encryption at rest.',
            '• Multi-Tenant Isolation (RLS): Database-level tenancy enforcement through PostgreSQL Row-Level Security, preventing any accidental cross-tenant data exposure.',
            '• Role-Based Access Control (RBAC): Strict least-privilege policies ensuring only assigned approvers can view each respective case dossier.'
          ]
        },
        {
          id: 'derechos-arco-contacto',
          badge: 'Clause 7',
          title: '7. Data Subject Rights & Privacy Contact',
          content: [
            'Authorized users may exercise rights of Access, Rectification, Erasure, and Objection regarding their direct corporate account details by writing to our dedicated privacy desk.',
            'For inquiries regarding personal data contained within customer enterprise documents, Ilithya will route the request to the respective Data Controller organization.'
          ]
        }
      ],
      contactCta: {
        title: 'Questions regarding Compliance or DPAs?',
        desc: 'Our compliance and data protection team is available to execute standard contractual clauses and custom Data Processing Agreements (DPA).',
        email: 'privacy@ilithya.app',
        btnText: 'Contact Privacy Officer'
      }
    },
    terms: {
      metaTitle: 'Terms of Service & Limitation of Liability | Ilithya Workflow',
      metaDesc: 'B2B contractual terms of use, electronic signature legal validity, liability cap, dispute resolution, and mutual safeguards for Ilithya Workflow.',
      keywords: 'saas terms of service, electronic signature enforceability, uncitral model law, esign act ueta eidas, contract liability disclaimer, binding commercial arbitration',
      badge: 'B2B SaaS Master Terms & Conditions',
      title: 'Terms of Service & Limitation of Liability',
      subtitle: 'B2B subscription contract, legal scope of digital signatures, and strict liability limitations designed for mutual legal defense.',
      lastUpdated: 'Effective Date: October 25, 2026',
      summaryCards: [
        {
          icon: 'file-check',
          title: 'Statutory Signature Validity',
          desc: 'Audit-ready electronic signatures compliant with UNCITRAL, US ESIGN/UETA, and EU eIDAS frameworks.'
        },
        {
          icon: 'alert-triangle',
          title: 'Not a Party to Transactions',
          desc: 'Ilithya supplies the workflow engine but is never a party, guarantor, or witness to agreements between users.'
        },
        {
          icon: 'scale',
          title: 'Strict Liability Cap',
          desc: 'Total aggregate liability is capped at amounts actually paid by the Customer in the 12 months preceding the claim.'
        },
        {
          icon: 'gavel',
          title: 'Arbitration & Class Action Waiver',
          desc: 'Disputes resolved via 30-day friendly negotiation followed by binding commercial arbitration with no class lawsuits.'
        }
      ],
      sections: [
        {
          id: 'naturaleza-b2b',
          badge: 'Section 1',
          title: '1. Enterprise B2B Scope & Contracting Authority',
          content: [
            'Ilithya Workflow is a Software-as-a-Service (SaaS) workflow orchestration and digital signing platform offered exclusively for enterprise and commercial use (B2B).',
            'By accessing or using the platform, the individual executing this agreement represents and warrants that they possess full legal capacity and corporate authority to bind their enterprise to these Terms.'
          ]
        },
        {
          id: 'validez-firmas',
          badge: 'Section 2',
          title: '2. Electronic Signatures, Precision Stamping & Evidentiary Value',
          content: [
            'Electronic signatures and verification stamps generated by Ilithya Workflow incorporate UTC timestamps, origin IP metadata, and SHA-256 cryptographic hashes engineered to meet statutory evidentiary standards under:',
            '• UNCITRAL Model Law on Electronic Commerce and Model Law on Electronic Signatures.',
            '• The Electronic Signatures in Global and National Commerce Act (ESIGN) and Uniform Electronic Transactions Act (UETA).',
            '• Regulation (EU) No 910/2014 (eIDAS) regarding advanced electronic signatures.',
            '• Applicable commercial codes and data message statutes throughout the Americas.'
          ]
        },
        {
          id: 'exencion-negocio-subyacente',
          badge: 'Section 3',
          title: '3. Disclaimer of Liability regarding Underlying Transactions (Anti-Lawsuit Shield)',
          content: [
            'To preclude unfounded claims and improper joinder in third-party litigation:',
            'a) Ilithya is NOT a Party: Ilithya operates strictly as an impartial technology provider. In no event shall Ilithya be deemed a party, guarantor, surety, or witness to contracts, purchase orders, dismissals, or vendor payments executed on the platform.',
            'b) Customer Duty to Determine Legal Form: The Customer bears sole responsibility for verifying whether an electronic signature is legally permissible for the specific subject matter under the laws of the applicable jurisdiction, or whether traditional formalities (such as notarial deeds or court filings) are mandated.',
            'c) Accuracy of Document Contents: Ilithya does not inspect, substantiate, or verify the veracity, legitimacy, or compliance of the text, dollar figures, or attachments uploaded by users.'
          ],
          highlightBox: {
            title: 'Express Substantive Disclaimer',
            text: 'Ilithya disclaims all liability arising out of commercial or labor disputes between the Customer and its suppliers, employees, or regulatory authorities regarding contracts routed through the system.'
          }
        },
        {
          id: 'seguridad-credenciales',
          badge: 'Section 4',
          title: '4. Credential Custody and Legal Attribution of Authority',
          content: [
            'The Customer and its authorized signers maintain exclusive duty over the confidentiality of their corporate SSO credentials (Google Workspace / Microsoft 365).',
            'Any approval or signature placed using legitimate corporate credentials shall be legally presumed to have been executed by its authorized holder, releasing Ilithya from any claim resulting from compromised internal accounts or unauthorized internal delegation.'
          ]
        },
        {
          id: 'limitacion-responsabilidad',
          badge: 'Section 5',
          title: '5. Limitation of Liability & Consequential Damages Exclusion',
          content: [
            'To manage legal and enterprise risk:',
            '• Exclusion of Indirect and Consequential Damages: Under no circumstances shall Ilithya, its affiliates, directors, or employees be liable for lost profits, lost revenues, business interruption, loss of goodwill, punitive damages, or procurement of substitute services.',
            '• Aggregate Liability Cap: Ilithya’s total cumulative liability arising out of or related to this agreement shall be strictly capped at the total amount actually paid by the Customer to Ilithya during the twelve (12) months preceding the event giving rise to liability (or $0 USD for pilot evaluations and free tiers).'
          ]
        },
        {
          id: 'indemnizacion-cliente',
          badge: 'Section 6',
          title: '6. Customer Indemnification Obligation',
          content: [
            'The Customer agrees to defend, indemnify, and hold harmless Ilithya and its officers from and against any third-party claims, government investigations, labor fines, or legal expenses (including reasonable attorney fees) resulting from:',
            '1. The illegality, infringement, or factual falsity of documents submitted by its users.',
            '2. Contractual disputes between the Customer and its employees, contractors, or vendors.',
            '3. Any breach of applicable privacy laws or these Terms by the Customer.'
          ]
        },
        {
          id: 'arbitraje-renuncia',
          badge: 'Section 7',
          title: '7. Mandatory Negotiation, Binding Arbitration & Class Action Waiver',
          content: [
            '• 30-Day Friendly Negotiation: In the event of any controversy, the parties agree to conduct good-faith direct executive negotiations for at least thirty (30) business days.',
            '• Binding Commercial Arbitration: Unresolved disputes shall be submitted to final and binding commercial arbitration under established rules of arbitration, with no recourse to jury trial.',
            '• Class Action Waiver: The Customer agrees that all disputes shall be resolved exclusively on an individual basis, waiving all rights to initiate, join, or participate in class actions or collective lawsuits against Ilithya.'
          ]
        }
      ],
      contactCta: {
        title: 'Corporate Legal Desk',
        desc: 'For custom enterprise master service agreements (MSA), specific SLAs, or regulatory filings, reach out to our legal department.',
        email: 'legal@ilithya.app',
        btnText: 'Contact Legal Department'
      }
    }
  },
  it: {
    privacy: {
      metaTitle: 'Informativa sulla Privacy e Trattamento Dati | Ilithya Workflow',
      metaDesc: 'Scopri quali dati tratta Ilithya Workflow, quali informazioni conserviamo per fini legali di non ripudio e audit, e le nostre garanzie di non utilizzo per l\'IA.',
      keywords: 'informativa privacy, trattamento dati personali, responsabile del trattamento dati, data processor, non ripudio legale, tracciamento sha256, archiviazione automatica 30 giorni, conformita gdpr',
      badge: 'Governance dei Dati & Sicurezza Giuridica',
      title: 'Informativa sulla Privacy e Trattamento dei Dati',
      subtitle: 'Trasparenza totale su quali informazioni leggiamo, quali dati archiviamo per fini legali e come tuteliamo la sovranità documentale della tua azienda.',
      lastUpdated: 'In vigore dal 25 Ottobre 2026',
      summaryCards: [
        {
          icon: 'shield',
          title: 'Ruolo di Responsabile (Data Processor)',
          desc: 'La tua azienda mantiene la titolarità esclusiva dei documenti. Ilithya tratta le informazioni unicamente secondo le tue istruzioni operative.'
        },
        {
          icon: 'database',
          title: 'Auto-Archiviazione a 30 Giorni',
          desc: 'I documenti in transito risiedono in cache sicura per 30 giorni e vengono trasferiti sul tuo Google Drive o OneDrive aziendale.'
        },
        {
          icon: 'lock',
          title: 'Traccia Crittografica SHA-256',
          desc: 'Conserviamo esclusivamente gli hash e i timestamp forensi per sostenere il non ripudio e proteggerti da audit e controversie legali.'
        },
        {
          icon: 'ban',
          title: 'Zero Vendita e Zero Addestramento IA',
          desc: 'Non commercializziamo mai informazioni riservate né utilizziamo i tuoi contratti per addestrare modelli di Intelligenza Artificiale.'
        }
      ],
      tableData: {
        headerCategory: 'Categoria di Informazioni',
        headerProcessed: 'Quali dati leggiamo in transito?',
        headerStored: 'Quali dati archiviamo?',
        headerPurpose: 'Finalità e Base Giuridica',
        rows: [
          {
            category: 'Contenuto Documentale (PDF)',
            processed: 'Testo visivo del PDF, numero di protocollo, coordinate di firma e timbri.',
            stored: 'Cache temporanea crittografata durante il flusso attivo (massimo 30 giorni). Trasferito poi sul cloud aziendale del Cliente.',
            purpose: 'Esecuzione del servizio di approvazione e apposizione delle firme digitali sulle coordinate millimetriche esatte.'
          },
          {
            category: 'Tracce Forensi di Audit',
            processed: 'Indirizzo IP pubblico, browser/User-Agent, marca temporale UTC e hash del file.',
            stored: 'Log immutabile con hash SHA-256, timestamp UTC, IP di origine ed esito della decisione (conservato come prova legale).',
            purpose: 'Garantire il principio di Non Ripudio e la piena validità probatoria dinanzi ad audit fiscali, lavorativi o commerciali.'
          },
          {
            category: 'Identità del Firmatario',
            processed: 'Nome completo, email aziendale, qualifica e token di sessione SSO (Google Workspace / Microsoft 365).',
            stored: 'Nome, qualifica ed email aziendale impressi nel timbro visivo e nel fascicolo di audit.',
            purpose: 'Attribuzione certa della firma alla persona autorizzata, prevenendo furti di identità.'
          },
          {
            category: 'Note Interne di Revisione',
            processed: 'Commenti e quesiti scambiati tra approvatori durante la gestione del fascicolo.',
            stored: 'Cronologia delle note allegata al fascicolo finale fino all\'archiviazione definitiva.',
            purpose: 'Tracciabilità e trasparenza per l\'audit interno aziendale.'
          }
        ]
      },
      sections: [
        {
          id: 'responsabile-encargado',
          badge: 'Clausola 1',
          title: '1. Rapporto Giuridico: Titolare vs. Responsabile del Trattamento (GDPR)',
          content: [
            'Ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR UE 2016/679) e della normativa applicabile, i ruoli sono definiti con assoluta trasparenza:',
            'a) L\'Azienda Cliente agisce in qualità di Titolare del Trattamento (Data Controller). È l\'unica entità autorizzata a stabilire quali documenti o dati personali vengono inseriti sulla piattaforma.',
            'b) Ilithya Workflow opera in qualità di Responsabile del Trattamento (Data Processor). Elabora le informazioni esclusivamente per conto e secondo le istruzioni operative del Cliente per erogare il servizio SaaS.'
          ],
          highlightBox: {
            title: 'Titolarità Esclusiva del Cliente',
            text: 'Ilithya Workflow non acquisisce alcun diritto o licenza sui documenti, contratti o segreti commerciali gestiti sulla piattaforma.'
          }
        },
        {
          id: 'datos-leidos',
          badge: 'Clausola 2',
          title: '2. Quali Informazioni Leggiamo in Transito',
          content: [
            'Per consentire l\'approvazione e apporre i timbri nelle coordinate esatte, il nostro motore esegue letture tecniche automatizzate e rigorosamente delimitate:',
            '• Metadati del Documento: Dimensioni della pagina, orientamento, numero di protocollo, hash SHA-256 originale e coordinate di destinazione dei timbri.',
            '• Dati di Autenticazione: Credenziali aziendali convalidate tramite Single Sign-On (OAuth 2.0 con Google Workspace o Microsoft 365).',
            '• Visualizzazione Protetta: Anteprima web temporanea affinché il firmatario possa esaminare il documento prima di convalidarlo.'
          ]
        },
        {
          id: 'datos-almacenados-fines',
          badge: 'Clausola 3',
          title: '3. Quali Informazioni Archiviamo e Finalità Legali (Tutela Anti-Contenzioso)',
          content: [
            'Allo scopo di conferire alle approvazioni piena certezza giuridica, validità probatoria ed escludere contestazioni di paternità:',
            '1. Registro di Audit Crittografico Immutabile: Per ogni firma o rifiuto viene registrata la marca temporale UTC, l\'IP di origine, l\'ID dell\'utente e l\'hash SHA-256 del documento.',
            '2. Principio di Non Ripudio: Tale registro è indispensabile per dimostrare che una firma non può essere disconosciuta dal firmatario ai sensi del regolamento eIDAS e della legge modello UNCITRAL.',
            '3. Difesa in Caso di Contenzioso: In caso di controlli fiscali o vertenze contrattuali, questa traccia tecnica funge da prova inconfutabile di integrità.'
          ]
        },
        {
          id: 'politica-retencion-30-dias',
          badge: 'Clausola 4',
          title: '4. Politica di Conservazione e Auto-Archiviazione a 30 Giorni',
          content: [
            'A differenza dei software tradizionali che trattengono i documenti per aumentare i costi di storage, Ilithya Workflow adotta un modello snello e rispettoso della sovranità aziendale:',
            '• Cache Attiva Temporanea: I file PDF restano in archiviazione crittografata protetta da PostgreSQL Row-Level Security per un massimo di trenta (30) giorni.',
            '• Trasferimento sul Cloud Aziendale: Al termine del processo o al 30° giorno, il pacchetto completo viene trasferito automaticamente nel Google Drive o OneDrive del Cliente.',
            '• Cancellazione della Cache: Verificato il successo del trasferimento, il file PDF viene eliminato dai server attivi di Ilithya, conservando unicamente i log crittografici di audit.'
          ],
          highlightBox: {
            title: 'Archiviazione nel Cloud Aziendale',
            text: 'Una volta depositato su Google Drive o OneDrive, il documento rimane interamente sotto la custodia e la governance della tua organizzazione.'
          }
        },
        {
          id: 'cero-comercializacion-cero-ia',
          badge: 'Clausola 5',
          title: '5. Garanzia Assoluta: Zero Commercializzazione e Zero Addestramento IA',
          content: [
            'Ilithya Workflow assume impegni vincolanti:',
            '• Nessuna Vendita di Dati: Non venderemo, cederemo né monetizzeremo mai documenti o dati personali con intermediari o terzi.',
            '• Nessun Addestramento di Modelli IA: Nessun contratto o dato del cliente sarà mai utilizzato per addestrare o ottimizzare modelli di Intelligenza Artificiale (LLM).'
          ]
        },
        {
          id: 'seguridad-tecnica',
          badge: 'Clausola 6',
          title: '6. Misure di Sicurezza e Isolamento Tecnico',
          content: [
            '• Crittografia Robusta: Crittografia in transito con TLS 1.3 e crittografia a riposo con standard AES-256.',
            '• Isolamento Multi-Tenant: Separazione logica a livello di database tramite PostgreSQL Row-Level Security (RLS).',
            '• Controllo degli Accessi (RBAC): Privilegi minimi per garantire che solo gli utenti autorizzati visualizzino ciascun fascicolo.'
          ]
        },
        {
          id: 'derechos-arco-contacto',
          badge: 'Clausola 7',
          title: '7. Diritti degli Interessati e Contatto Privacy',
          content: [
            'Gli utenti possono esercitare i diritti di accesso, rettifica, cancellazione e opposizione previsti dal GDPR scrivendo al nostro desk di conformità:',
            'Per i dati contenuti nei documenti delle Aziende Clienti, Ilithya inoltrerà la richiesta al rispettivo Titolare del Trattamento.'
          ]
        }
      ],
      contactCta: {
        title: 'Domande su Privacy o DPA?',
        desc: 'Il nostro responsabile della protezione dati è a disposizione per stipulare Accordi di Trattamento Dati (DPA).',
        email: 'privacy@ilithya.app',
        btnText: 'Contatta il Responsabile Privacy'
      }
    },
    terms: {
      metaTitle: 'Termini di Servizio e Limitazione di Responsabilità | Ilithya Workflow',
      metaDesc: 'Condizioni contrattuali d\'uso di Ilithya Workflow, validità della firma digitale, limitazione di responsabilità e arbitrato.',
      keywords: 'termini di servizio saas, validita legale firma elettronica, regolamento eidas, delimitazione responsabilita contratti, arbitrato commerciale vincolante',
      badge: 'Condizioni Generali di Contratto B2B SaaS',
      title: 'Termini di Servizio e Limitazione di Responsabilità',
      subtitle: 'Contratto di licenza B2B, portata della firma elettronica e delimitazione rigorosa delle responsabilità per la tutela reciproca.',
      lastUpdated: 'In vigore dal 25 Ottobre 2026',
      summaryCards: [
        {
          icon: 'file-check',
          title: 'Validità Legale della Firma',
          desc: 'Firme elettroniche con tracciabilità completa conformi alla Legge Modello UNCITRAL e al regolamento europeo eIDAS.'
        },
        {
          icon: 'alert-triangle',
          title: 'Estraneità al Negozio Sottostante',
          desc: 'Ilithya fornisce l\'infrastruttura tecnologica ma non è parte dei contratti o degli accordi stipulati tra gli utenti.'
        },
        {
          icon: 'scale',
          title: 'Tetto di Responsabilità (Cap)',
          desc: 'La responsabilità massima cumulativa è limitata agli importi effettivamente corrisposti nei 12 mesi precedenti il reclamo.'
        },
        {
          icon: 'gavel',
          title: 'Risoluzione Controversie e Arbitrato',
          desc: 'Risoluzione tramite negoziazione amichevole e arbitrato vincolante con rinuncia alle azioni collettive.'
        }
      ],
      sections: [
        {
          id: 'naturaleza-b2b',
          badge: 'Sezione 1',
          title: '1. Natura del Servizio B2B e Requisiti di Sottoscrizione',
          content: [
            'Ilithya Workflow è una soluzione software as a service (SaaS) destinata esclusivamente all\'ambito professionale e aziendale (B2B).',
            'Chi accede o utilizza la piattaforma dichiara di possedere i poteri di rappresentanza necessari per vincolare la propria organizzazione a questi Termini.'
          ]
        },
        {
          id: 'validez-firmas',
          badge: 'Sezione 2',
          title: '2. Firma Elettronica e Principi di Validità',
          content: [
            'Le firme elettroniche e i timbri digitali generati da Ilithya Workflow integrano marcature temporali e hash SHA-256 concepiti per garantire l\'efficacia probatoria ai sensi del Regolamento eIDAS (UE 910/2014) e della Legge Modello UNCITRAL.'
          ]
        },
        {
          id: 'exencion-negocio-subyacente',
          badge: 'Sezione 3',
          title: '3. Esclusione di Responsabilità sul Contenuto e sulla Validità dei Contratti',
          content: [
            'Al fine di prevenire azioni legali improprie:',
            'a) Ilithya NON è parte delle transazioni: Forniamo esclusivamente l\'infrastruttura tecnologica. Ilithya non verifica né garantisce la legalità o l\'adempimento dei contratti stipulati dagli utenti.',
            'b) Idoneità della Forma Elettronica: Spetta unicamente al Cliente verificare se l\'atto giuridico richiede forme solenni (es. atto pubblico notarile) non sostituibili da firma elettronica.',
            'c) Veridicità dei Contenuti: Ilithya non convalida la veridicità delle dichiarazioni o degli importi caricati dagli utenti.'
          ],
          highlightBox: {
            title: 'Esclusione di Responsabilità Sostanziale',
            text: 'Ilithya declina ogni responsabilità derivante da controversie tra il Cliente e i suoi fornitori o dipendenti in merito ai contratti firmati sulla piattaforma.'
          }
        },
        {
          id: 'seguridad-credenciales',
          badge: 'Sezione 4',
          title: '4. Custodia delle Credenziali e Presunzione di Autenticità',
          content: [
            'Il Cliente è l\'unico custode delle credenziali e degli accessi aziendali (Google Workspace / Microsoft 365). Qualsiasi firma apposta con credenziali autenticate si presume legalmente riconducibile al relativo titolare.'
          ]
        },
        {
          id: 'limitacion-responsabilidad',
          badge: 'Sezione 5',
          title: '5. Limitazione di Responsabilità (Liability Cap)',
          content: [
            '• Esclusione di Danni Indiretti: In nessun caso Ilithya sarà responsabile per danni indiretti, lucro cessante o perdita di dati.',
            '• Massimale di Risarcimento: La responsabilità complessiva massima di Ilithya è limitata all\'importo effettivamente corrisposto dal Cliente nei dodici (12) mesi precedenti l\'evento contestato (o pari a 0€ per piani pilota gratuiti).'
          ]
        },
        {
          id: 'indemnizacion-cliente',
          badge: 'Sezione 6',
          title: '6. Obbligo di Manleva a Carico del Cliente',
          content: [
            'Il Cliente si impegna a manlevare e tenere indenne Ilithya da qualsiasi contestazione, sanzione o spesa legale derivante dall\'illiceità dei documenti caricati o dalla violazione delle normative applicabili da parte dei propri utenti.'
          ]
        },
        {
          id: 'arbitraje-renuncia',
          badge: 'Sezione 7',
          title: '7. Negoziazione, Arbitrato e Rinuncia alle Azioni di Classe',
          content: [
            'Qualsiasi controversia sarà preceduta da una negoziazione amichevole di 30 giorni e, in difetto di accordo, sarà demandata ad arbitrato commerciale vincolante con rinuncia espressa a qualsiasi azione collettiva o di classe.'
          ]
        }
      ],
      contactCta: {
        title: 'Ufficio Legale Aziendale',
        desc: 'Per accordi contrattuali personalizzati o richieste di audit, contatta il nostro dipartimento legale.',
        email: 'legal@ilithya.app',
        btnText: 'Contatta l\'Ufficio Legale'
      }
    }
  },
  pt: {
    privacy: {
      metaTitle: 'Política de Privacidade e Tratamento de Dados | Ilithya Workflow',
      metaDesc: 'Saiba quais dados o Ilithya Workflow processa, o que armazenamos para fins legais de não repúdio e auditoria, e nossa garantia de zero IA.',
      keywords: 'politica de privacidade, tratamento de dados, operador de dados, data processor, nao repudio juridico, log criptografico sha256, autoarquivamento 30 dias, protecao dados lgpd gdpr',
      badge: 'Governança de Dados & Segurança Jurídica',
      title: 'Política de Privacidade e Tratamento de Dados',
      subtitle: 'Transparência total sobre quais informações lemos, o que armazenamos para fins legais e como blindamos a soberania documental da sua empresa.',
      lastUpdated: 'Vigente a partir de 25 de Outubro de 2026',
      summaryCards: [
        {
          icon: 'shield',
          title: 'Papel de Operador (LGPD)',
          desc: 'Sua empresa detém a titularidade exclusiva dos documentos. O Ilithya trata as informações estritamente sob as suas instruções operacionais.'
        },
        {
          icon: 'database',
          title: 'Autoarquivamento aos 30 Dias',
          desc: 'Os arquivos em fluxo residem em cache seguro por até 30 dias e são transferidos para o Google Drive ou OneDrive da sua própria empresa.'
        },
        {
          icon: 'lock',
          title: 'Trilha Criptográfica SHA-256',
          desc: 'Retemos exclusivamente os hashes e carimbos de tempo forenses para sustentar o não repúdio e protegê-lo contra auditorias e litígios.'
        },
        {
          icon: 'ban',
          title: 'Zero Venda e Zero Treinamento de IA',
          desc: 'Nunca comercializamos dados confidenciais nem utilizamos seus contratos para alimentar modelos de Inteligência Artificial.'
        }
      ],
      tableData: {
        headerCategory: 'Categoria de Informação',
        headerProcessed: 'O que lemos em trânsito?',
        headerStored: 'O que armazenamos?',
        headerPurpose: 'Finalidade e Base Legal',
        rows: [
          {
            category: 'Conteúdo Documental (PDF)',
            processed: 'Texto visual do PDF, número de requisição, coordenadas de carimbo e assinaturas.',
            stored: 'Cache temporário criptografado durante o fluxo ativo (máximo 30 dias). Transferido em seguida para o armazenamento corporativo do Cliente.',
            purpose: 'Execução do serviço de aprovação e estampa de assinaturas digitais em coordenadas milimétricas exatas.'
          },
          {
            category: 'Trilhas Forenses de Auditoria',
            processed: 'Endereço IP público, navegador/User-Agent, carimbo temporal UTC e hashes do arquivo.',
            stored: 'Log imutável com hash SHA-256, carimbo de data/hora UTC, IP de origem e status da decisão (conservado como prova jurídica).',
            purpose: 'Garantir o princípio de Não Repúdio e plena validade probatória em auditorias fiscais, trabalhistas ou comerciais.'
          },
          {
            category: 'Identidade do Aprovador',
            processed: 'Nome completo, e-mail corporativo, cargo e token de sessão SSO (Google Workspace / Microsoft 365).',
            stored: 'Nome, cargo e e-mail corporativo vinculados à estampa visual e ao dossiê de auditoria.',
            purpose: 'Atribuição fidedigna da assinatura ao colaborador autorizado, prevenindo fraudes e falsidade ideológica.'
          },
          {
            category: 'Notas e Comentários',
            processed: 'Observações internas registradas pelos aprovadores durante o trâmite.',
            stored: 'Histórico de anotações anexado ao processo final até a transferência definitiva.',
            purpose: 'Rastreabilidade e governança para auditorias internas corporativas.'
          }
        ]
      },
      sections: [
        {
          id: 'responsable-encargado',
          badge: 'Cláusula 1',
          title: '1. Relação Jurídica: Controlador vs. Operador (LGPD)',
          content: [
            'Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e legislações internacionais aplicáveis, os papéis são claramente definidos:',
            'a) A Empresa Cliente atua como Controladora dos dados. É a única titular e responsável por determinar quais documentos, contratos e dados pessoais são incluídos no sistema.',
            'b) O Ilithya Workflow atua na qualidade de Operador de dados. Trata as informações técnica e documentalmente única e exclusivamente em nome e conforme as instruções do Cliente para a prestação do serviço SaaS.'
          ],
          highlightBox: {
            title: 'Titularidade Exclusiva do Cliente',
            text: 'O Ilithya Workflow não adquire qualquer direito de propriedade ou licença sobre os documentos, contratos ou segredos industriais tramitados na plataforma.'
          }
        },
        {
          id: 'datos-leidos',
          badge: 'Cláusula 2',
          title: '2. Quais Informações Lemos em Trânsito',
          content: [
            'Para orquestrar os fluxos e aplicar carimbos em coordenadas precisas, nosso motor executa leituras técnicas estritamente delimitadas:',
            '• Metadados do Documento: Dimensões de página, orientação, número de protocolo, hash SHA-256 original e coordenadas de posicionamento das assinaturas.',
            '• Dados dos Aprovadores: Credenciais corporativas validadas via Single Sign-On (OAuth 2.0 com Google Workspace ou Microsoft 365).',
            '• Visualização Segura: Renderização temporária em tela para que o aprovador possa examinar o processo antes de assinar.'
          ]
        },
        {
          id: 'datos-almacenados-fines',
          badge: 'Cláusula 3',
          title: '3. Quais Dados Armazenamos e Fins Legais (Proteção Anti-Litígios)',
          content: [
            'Para conferir plena validade jurídica às aprovações e evitar questionamentos e disputas judiciais:',
            '1. Registro Criptográfico Imutável de Auditoria: A cada assinatura ou recusa, é gravado indelevelmente o carimbo UTC, o IP de origem, a identidade do usuário e o hash SHA-256 do arquivo.',
            '2. Princípio de Não Repúdio: A guarda desse registro é essencial nos termos da MP 2.200-2/2001 e da Lei Modelo da UNCITRAL, impedindo que o signatário conteste posteriormente a autoria da assinatura.',
            '3. Prevenção de Litígios e Demandas: Em caso de fiscalização tributária ou ações trabalhistas, esse registro constitui prova técnica incontestável de integridade.'
          ]
        },
        {
          id: 'politica-retencion-30-dias',
          badge: 'Cláusula 4',
          title: '4. Política de Retenção e Autoarquivamento aos 30 Dias',
          content: [
            'Diferente de plataformas convencionais que retêm arquivos em nuvens fechadas para cobrar taxas de armazenamento:',
            '• Armazenamento Quente Temporário: Os arquivos PDF permanecem em armazenamento criptografado isolado por PostgreSQL Row-Level Security (RLS) por até 30 dias.',
            '• Autoarquivamento na Nuvem do Cliente: Ao concluir o fluxo ou no 30º dia, o processo selado é transferido automaticamente para o Google Drive ou Microsoft OneDrive corporativo do Cliente.',
            '• Descarte da Cache: Confirmada a transferência com sucesso, o arquivo PDF é excluído dos servidores de processamento do Ilithya, preservando-se apenas a trilha técnica de auditoria (hashes e carimbos) para respaldo jurídico.'
          ],
          highlightBox: {
            title: 'Guarda e Soberania no seu Próprio Cloud',
            text: 'Uma vez depositado no seu Google Drive ou OneDrive, a custódia e retenção do documento obedecem às políticas internas da sua empresa.'
          }
        },
        {
          id: 'cero-comercializacion-cero-ia',
          badge: 'Cláusula 5',
          title: '5. Garantia Estrita: Zero Comercialização e Zero Treinamento de IA',
          content: [
            'O Ilithya Workflow firma compromissos irrevogáveis:',
            '• Proibição de Venda de Dados: Jamais venderemos, alugaremos ou compartilharemos documentos ou dados de colaboradores com intermediários de dados ou anunciantes.',
            '• Proibição de Treinamento de Modelos de IA: Nenhum contrato, nota fiscal ou dado do cliente será utilizado para treinar ou calibrar modelos de Inteligência Artificial (LLMs).'
          ]
        },
        {
          id: 'seguridad-tecnica',
          badge: 'Cláusula 6',
          title: '6. Segurança e Isolamento Técnico',
          content: [
            '• Criptografia Avançada: Criptografia em trânsito com TLS 1.3 e em repouso com padrão AES-256.',
            '• Isolamento Multi-Inquilino (RLS): Separação no banco de dados via PostgreSQL Row-Level Security.',
            '• Controle de Acesso (RBAC): Políticas de privilégio mínimo para que apenas aprovadores designados acessem os dossiês.'
          ]
        },
        {
          id: 'derechos-arco-contacto',
          badge: 'Cláusula 7',
          title: '7. Direitos dos Titulares e Contato de Privacidade',
          content: [
            'Os titulares podem solicitar acesso, correção ou eliminação dos seus dados de conta corporativa diretamente ao nosso encarregado de privacidade (DPO):',
            'Para solicitações relativas a dados presentes em documentos de Clientes, o Ilithya encaminhará o pedido ao respectivo Controlador.'
          ]
        }
      ],
      contactCta: {
        title: 'Dúvidas sobre Privacidade e LGPD?',
        desc: 'Nosso encarregado de dados (DPO) está disponível para celebração de aditivos contratuais de tratamento de dados (DPA).',
        email: 'privacidade@ilithya.app',
        btnText: 'Falar com o Encarregado de Dados'
      }
    },
    terms: {
      metaTitle: 'Termos de Serviço e Limitação de Responsabilidade | Ilithya Workflow',
      metaDesc: 'Condições contratuais do Ilithya Workflow, validade da assinatura eletrônica, isenção de responsabilidade sobre negócios e foro arbitral.',
      keywords: 'termos de servico saas, validade juridica assinatura eletronica, medida provisoria 2200-2, delimitacao responsabilidade contratos, arbitragem comercial vinculante',
      badge: 'Termos Gerais de Contratação B2B SaaS',
      title: 'Termos de Serviço e Limitação de Responsabilidade',
      subtitle: 'Contrato de licença B2B, alcance da assinatura eletrônica e delimitação estrita de responsabilidades para proteção jurídica mútua.',
      lastUpdated: 'Vigente a partir de 25 de Outubro de 2026',
      summaryCards: [
        {
          icon: 'file-check',
          title: 'Validade Jurídica de Assinatura',
          desc: 'Assinaturas eletrônicas com trilha auditável em conformidade com a MP 2.200-2/2001 e a Lei Modelo da UNCITRAL.'
        },
        {
          icon: 'alert-triangle',
          title: 'Terceiro Alheio ao Negócio',
          desc: 'O Ilithya fornece a plataforma tecnológica, mas não é parte dos contratos, compras ou negócios celebrados entre os usuários.'
        },
        {
          icon: 'scale',
          title: 'Teto de Responsabilidade (Cap)',
          desc: 'A responsabilidade máxima agregada é limitada aos valores pagos pelo Cliente nos 12 meses anteriores ao evento.'
        },
        {
          icon: 'gavel',
          title: 'Arbitragem e Renúncia a Ações Coletivas',
          desc: 'Solução de controvérsias via negociação prévia e arbitragem vinculante, com renúncia a ações de classe.'
        }
      ],
      sections: [
        {
          id: 'naturaleza-b2b',
          badge: 'Seção 1',
          title: '1. Natureza do Serviço B2B e Capacidade de Contratação',
          content: [
            'O Ilithya Workflow é uma solução de software como serviço (SaaS) voltada exclusivamente a pessoas jurídicas e profissionais (B2B).',
            'Ao acessar ou utilizar a plataforma, o usuário declara deter os poderes de representação legal necessários para vincular sua empresa a estes Termos.'
          ]
        },
        {
          id: 'validez-firmas',
          badge: 'Seção 2',
          title: '2. Assinatura Eletrônica e Eficácia Probatória',
          content: [
            'As assinaturas e carimbos gerados pelo Ilithya Workflow contam com carimbos temporais e hashes SHA-256 concebidos para assegurar a autenticidade e integridade dos atos praticados, em conformidade com a Medida Provisória 2.200-2/2001 (art. 10, § 2º) e normas internacionais como ESIGN, UETA e eIDAS.'
          ]
        },
        {
          id: 'exencion-negocio-subyacente',
          badge: 'Seção 3',
          title: '3. Isenção de Responsabilidade sobre o Negócio Subjacente',
          content: [
            'Para afastar litígios indevidos contra a plataforma:',
            'a) O Ilithya NÃO é parte do negócio: Atuamos estritamente como provedor tecnológico imparcial. O Ilithya não atesta, avaliza nem responde pelo cumprimento dos contratos ou compras assinados.',
            'b) Adequação da Forma Eletrônica: Cabe exclusivamente ao Cliente verificar se o ato jurídico admite a assinatura eletrônica ou se exige solenidades públicas (ex.: escritura pública em cartório de notas).',
            'c) Veracidade do Conteúdo: O Ilithya não audita nem valida a veracidade dos dados ou documentos inseridos pelos usuários.'
          ],
          highlightBox: {
            title: 'Isenção Expressa de Responsabilidade Substantiva',
            text: 'O Ilithya se desvincula de qualquer disputa entre o Cliente e seus fornecedores, colaboradores ou terceiros a respeito das obrigações contratuais acordadas.'
          }
        },
        {
          id: 'seguridad-credenciales',
          badge: 'Seção 4',
          title: '4. Guarda de Credenciais e Presunção de Autoria',
          content: [
            'O Cliente é o único responsável pela guarda e sigilo de suas senhas corporativas (Google Workspace / Microsoft 365). Qualquer ato praticado com credenciais válidas presumir-se-á imputável ao seu respectivo titular.'
          ]
        },
        {
          id: 'limitacion-responsabilidad',
          badge: 'Seção 5',
          title: '5. Limitação Estrita de Responsabilidade (Cap)',
          content: [
            '• Exclusão de Danos Indiretos: O Ilithya não responde por lucros cessantes, perdas financeiras indiretas ou prejuízos imprevistos.',
            '• Teto Indenizatório: A responsabilidade máxima acumulada do Ilithya limita-se estritamente ao total pago pelo Cliente nos doze (12) meses anteriores ao fato (ou $0 USD em planos gratuitos e pilotos).'
          ]
        },
        {
          id: 'indemnizacion-cliente',
          badge: 'Seção 6',
          title: '6. Indenização a Favor do Ilithya',
          content: [
            'O Cliente concorda em defender e isentar o Ilithya e seus diretores de qualquer demanda ou autuação decorrente do conteúdo dos documentos carregados ou do descumprimento de leis pelo Cliente.'
          ]
        },
        {
          id: 'arbitraje-renuncia',
          badge: 'Seção 7',
          title: '7. Negociação Prévia, Foro Arbitral e Renúncia a Ações de Classe',
          content: [
            'Eventuais controvérsias serão submetidas a negociação amigável por 30 dias e, na ausência de acordo, a arbitragem comercial vinculante, com renúncia expressa a ações coletivas de classe.'
          ]
        }
      ],
      contactCta: {
        title: 'Assessoria Jurídica Corporativa',
        desc: 'Para minutas corporativas personalizadas ou termos de nível de serviço (SLA), entre em contato com nossa equipe jurídica.',
        email: 'legal@ilithya.app',
        btnText: 'Falar com o Departamento Jurídico'
      }
    }
  }
};
