export interface UseCaseDoc {
  name: string;
  type: string;
  note: string;
}

export interface UseCaseStation {
  step: number;
  role: string;
  name: string;
  action: string;
  badge: string;
}

export interface UseCaseClosure {
  type: string;
  summary: string;
  sla: string;
  benefit: string;
}

export interface UseCaseItem {
  id: string;
  category: string;
  categoryName: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  docs: UseCaseDoc[];
  stations: UseCaseStation[];
  closure: UseCaseClosure;
}

export const useCasesEs: UseCaseItem[] = [
  {
    id: "compras-proveedores",
    category: "finanzas",
    categoryName: "Gestión Financiera y Compras",
    code: "CASO 01",
    title: "Compra o Pago a Proveedores",
    shortDesc: "Autorización estructurada de adquisiciones corporativas asegurando viabilidad técnica y presupuestaria.",
    fullDesc: "Estructuración del proceso de autorización para adquisiciones corporativas, asegurando la viabilidad técnica y presupuestaria antes de ejecutar la compra y evitando cotizaciones vencidas.",
    docs: [
      { name: "Formato de Requisición", type: "PDF / Form", note: "Llenado por solicitante" },
      { name: "Cotización del Proveedor", type: "PDF / Imagen", note: "Con vigencia y precios" },
      { name: "Justificación de Compra", type: "Doc / Adjunto", note: "Impacto operativo" }
    ],
    stations: [
      {
        step: 1,
        role: "Solicitante",
        name: "Carga de Expediente",
        action: "Sube requisa, cotización y justificación en un solo paquete digital.",
        badge: "Iniciado"
      },
      {
        step: 2,
        role: "Estación 1: Jefe de Área",
        name: "Validación Técnica",
        action: "Revisa la pertinencia operativa y autoriza con firma digital y sello de fecha/hora.",
        badge: "Sello Digital"
      },
      {
        step: 3,
        role: "Estación 2: Gerente Financiero",
        name: "Disponibilidad de Presupuesto",
        action: "Cruza con la partida presupuestaria disponible y aprueba el gasto formalmente.",
        badge: "Control Fiscal"
      },
      {
        step: 4,
        role: "Estación 3: Depto. de Compras",
        name: "Emisión de Orden Oficial",
        action: "Revisión final y despacho de orden oficial al proveedor basándose en el PDF consolidado.",
        badge: "Aprobación Final"
      }
    ],
    closure: {
      type: "PDF Consolidado con Sello Criptográfico",
      summary: "El proveedor recibe la orden con todas las firmas integradas en un único expediente digital inmutable.",
      sla: "SLA Típico: < 24 Horas",
      benefit: "Elimina compras a destiempo y protege contra aumentos imprevistos de cotización."
    }
  },
  {
    id: "viaticos-colaboradores",
    category: "finanzas",
    categoryName: "Gestión Financiera y Compras",
    code: "CASO 02",
    title: "Solicitud y Pago de Viáticos",
    shortDesc: "Control previo de gastos de viaje de trabajo locales o internacionales con liquidación ordenada.",
    fullDesc: "Aprobación ordenada de traslados, hospedaje y alimentación antes del viaje, con verificación contable automática para liquidación sin papeleo disperso.",
    docs: [
      { name: "Solicitud de Itinerario", type: "Formulario", note: "Fechas, destino y propósito" },
      { name: "Presupuesto Estimado", type: "Hoja de Cálculo / PDF", note: "Tarifas de viáticos" },
      { name: "Comprobantes / Facturas", type: "PDF / XML", note: "Para fase de liquidación" }
    ],
    stations: [
      {
        step: 1,
        role: "Colaborador Viajero",
        name: "Registro de Gira de Trabajo",
        action: "Ingresa itinerario de fechas y cálculo de asignación diaria de viáticos.",
        badge: "Solicitud"
      },
      {
        step: 2,
        role: "Estación 1: Supervisor Inmediato",
        name: "Aprobación de Misión",
        action: "Valida la necesidad del traslado y autoriza la salida del colaborador.",
        badge: "Visto Bueno"
      },
      {
        step: 3,
        role: "Estación 2: Contabilidad & Pagos",
        name: "Desembolso y Liquidación",
        action: "Verifica que las facturas cumplan los requisitos fiscales y emite la transferencia.",
        badge: "Liquidación"
      }
    ],
    closure: {
      type: "Expediente Contable Cerrado",
      summary: "Tesorería archiva el PDF consolidado con todas las facturas y sellos de aprobación listos para fiscalización.",
      sla: "SLA Típico: < 48 Horas",
      benefit: "Elimina anticipos descontrolados y reduce el tiempo de reembolso a los colaboradores."
    }
  },
  {
    id: "onboarding-candidatos",
    category: "rrhh",
    categoryName: "Recursos Humanos y Talento",
    code: "CASO 03",
    title: "Onboarding y Selección",
    shortDesc: "Filtro colaborativo ágil de CVs entre líderes de área y RRHH para agendar citas sin cadenas de correo.",
    fullDesc: "Orquestación del flujo de selección entre el líder técnico y recursos humanos para acordar propuestas salariales y agendar entrevistas sin pérdida de candidatos valiosos.",
    docs: [
      { name: "Curriculum Vitae (CV)", type: "PDF", note: "Perfil profesional" },
      { name: "Requisa de Contratación", type: "Formato Corporativo", note: "Perfil del puesto y vacante" },
      { name: "Propuesta Económica", type: "PDF Confidencial", note: "Rango salarial autorizado" }
    ],
    stations: [
      {
        step: 1,
        role: "Especialista de RRHH",
        name: "Publicación de Perfil",
        action: "Carga la terna final de candidatos con sus evaluaciones psicométricas.",
        badge: "Filtro Inicial"
      },
      {
        step: 2,
        role: "Estación 1: Líder de Área",
        name: "Aprobación Técnica",
        action: "Revisa la experiencia técnica y marca candidatos seleccionados para entrevista formal.",
        badge: "Visto Bueno Técnico"
      },
      {
        step: 3,
        role: "Estación 2: Gerencia General",
        name: "Aprobación de Oferta",
        action: "Firma la carta de oferta salarial para proceder a la contratación oficial.",
        badge: "Firma de Oferta"
      }
    ],
    closure: {
      type: "Carta Oferta Firmada y Expediente de Ingreso",
      summary: "El candidato recibe su propuesta formal con firmas digitales verificables y fecha de inicio confirmada.",
      sla: "SLA Típico: < 12 Horas",
      benefit: "Gana talento de alto nivel contratando días antes que los competidores."
    }
  },
  {
    id: "solicitud-vacaciones",
    category: "rrhh",
    categoryName: "Recursos Humanos y Talento",
    code: "CASO 04",
    title: "Vacaciones (Acción de Personal)",
    shortDesc: "Trámite de permisos y vacaciones con sellos de tiempo y archivado automático del PDF final en el expediente digital.",
    fullDesc: "Gestión clara de solicitudes de descanso legal o permisos personales asegurando que no se traslapen ausencias clave en los equipos de trabajo.",
    docs: [
      { name: "Formato de Acción de Personal", type: "PDF / Form", note: "Días solicitados" },
      { name: "Historial de Saldo de Días", type: "Reporte RRHH", note: "Días disponibles" }
    ],
    stations: [
      {
        step: 1,
        role: "Colaborador",
        name: "Solicitud de Días",
        action: "Selecciona el período deseado y verifica su saldo disponible en pantalla.",
        badge: "Trámite"
      },
      {
        step: 2,
        role: "Estación 1: Jefe Directo",
        name: "Confirmación de Cobertura",
        action: "Verifica que el equipo cuente con suplentes y autoriza la fecha solicitada.",
        badge: "Aprobado"
      },
      {
        step: 3,
        role: "Estación 2: Nómina y RRHH",
        name: "Registro en Planilla",
        action: "Aplica la deducción de días en el sistema central de nóminas y sella el PDF.",
        badge: "Cierre RRHH"
      }
    ],
    closure: {
      type: "Constancia Sellada de Vacaciones",
      summary: "El colaborador y el supervisor reciben el PDF formalmente firmado para su archivo digital personal.",
      sla: "SLA Típico: < 8 Horas",
      benefit: "Transparencia total en saldos y eliminación de disputas por días pendientes."
    }
  },
  {
    id: "compra-suministros",
    category: "operaciones",
    categoryName: "Operaciones y Servicios Generales",
    code: "CASO 05",
    title: "Compra de Suministros",
    shortDesc: "Validación de insumos y mantenimiento de sedes corporativas con cruce presupuestario y despacho con bodega.",
    fullDesc: "Canal rápido para tramitar reparaciones urgentes, insumos de oficina y consumibles tecnológicos sin burocracia que paralice la infraestructura.",
    docs: [
      { name: "Boleta de Suministros", type: "PDF / Form", note: "Detalle de ítems requeridos" },
      { name: "Cotización de Servicio", type: "PDF / Factura Proforma", note: "En caso de reparaciones" }
    ],
    stations: [
      {
        step: 1,
        role: "Encargado de Sede",
        name: "Requerimiento de Material",
        action: "Detalla la necesidad de suministros o reparación urgente de instalaciones.",
        badge: "Requerimiento"
      },
      {
        step: 2,
        role: "Estación 1: Servicios Generales",
        name: "Verificación de Inventario",
        action: "Valida si existe stock disponible en bodega central o si requiere orden de compra externa.",
        badge: "Inventario"
      },
      {
        step: 3,
        role: "Estación 2: Bodega / Despacho",
        name: "Entrega y Recepción",
        action: "El documento autorizado retorna a Servicios Generales para recibir los suministros.",
        badge: "Logística"
      }
    ],
    closure: {
      type: "PDF de Autorización Inmediata",
      summary: "Servicios Generales recibe el documento con código QR de verificación para despachar con bodega.",
      sla: "SLA Típico: < 24 Horas",
      benefit: "Mantenimiento ágil sin instalaciones paralizadas por retrasos de firma."
    }
  }
];

export const useCasesEn: UseCaseItem[] = [
  {
    id: "compras-proveedores",
    category: "finanzas",
    categoryName: "Financial & Procurement Management",
    code: "CASE 01",
    title: "Vendor Procurement & Invoices",
    shortDesc: "Structured authorization of corporate purchases ensuring technical viability and budget allocation.",
    fullDesc: "Structuring the authorization pipeline for enterprise acquisitions, validating technical relevance and budgetary availability prior to order execution to prevent expired supplier quotes.",
    docs: [
      { name: "Purchase Requisition", type: "PDF / Form", note: "Completed by requester" },
      { name: "Vendor Quotation", type: "PDF / Image", note: "With valid terms & prices" },
      { name: "Business Justification", type: "Doc / Attachment", note: "Operational impact" }
    ],
    stations: [
      {
        step: 1,
        role: "Requester",
        name: "Dossier Upload",
        action: "Submits purchase requisition, supplier quotation, and business case in a single digital package.",
        badge: "Initiated"
      },
      {
        step: 2,
        role: "Station 1: Area Supervisor",
        name: "Technical Validation",
        action: "Verifies operational necessity and authorizes with digital signature and UTC timestamp.",
        badge: "Digital Stamp"
      },
      {
        step: 3,
        role: "Station 2: Finance Director",
        name: "Budget Pre-Clearance",
        action: "Cross-checks available budget line item and formally approves company expenditure.",
        badge: "Budget Control"
      },
      {
        step: 4,
        role: "Station 3: Procurement Dept",
        name: "Purchase Order Issuance",
        action: "Conducts final audit and dispatches official purchase order to vendor based on the consolidated PDF.",
        badge: "Final Approval"
      }
    ],
    closure: {
      type: "Consolidated PDF with Cryptographic Stamp",
      summary: "The vendor receives the purchase order with all signatures permanently consolidated into an immutable PDF.",
      sla: "Typical SLA: < 24 Hours",
      benefit: "Eliminates last-minute rush orders and defends against unexpected supplier price hikes."
    }
  },
  {
    id: "viaticos-colaboradores",
    category: "finanzas",
    categoryName: "Financial & Procurement Management",
    code: "CASE 02",
    title: "Travel Allowance & Per Diems",
    shortDesc: "Pre-approval of domestic and international corporate travel expenses with streamlined expense settlement.",
    fullDesc: "Standardized request, authorization, and expense reconciliation flow for team travel, ensuring policy compliance before disbursements.",
    docs: [
      { name: "Travel Itinerary Request", type: "Form", note: "Dates, destination & purpose" },
      { name: "Estimated Budget", type: "Spreadsheet / PDF", note: "Per diem allowances" },
      { name: "Receipts & Invoices", type: "PDF / Tax Receipts", note: "Expense reconciliation phase" }
    ],
    stations: [
      {
        step: 1,
        role: "Traveling Team Member",
        name: "Business Travel Submission",
        action: "Submits travel dates, client meeting itinerary, and standard per diem calculation.",
        badge: "Request"
      },
      {
        step: 2,
        role: "Station 1: Direct Supervisor",
        name: "Travel Authorization",
        action: "Validates travel objective and approves dates preventing out-of-policy trips.",
        badge: "Endorsed"
      },
      {
        step: 3,
        role: "Station 2: Accounting & Payroll",
        name: "Disbursement & Clearance",
        action: "Reviews tax-compliant receipts and schedules direct bank transfer to the traveler.",
        badge: "Settled"
      }
    ],
    closure: {
      type: "Closed Accounting Expense File",
      summary: "Finance permanently archives the consolidated PDF with all receipts and approval stamps ready for fiscal audits.",
      sla: "Typical SLA: < 48 Hours",
      benefit: "Eliminates unapproved travel spending and cuts employee reimbursement delays by 75%."
    }
  },
  {
    id: "onboarding-candidatos",
    category: "rrhh",
    categoryName: "Human Resources & Talent",
    code: "CASE 03",
    title: "Candidate Onboarding & Hiring",
    shortDesc: "Agile collaborative candidate review between hiring managers and HR without messy email threads.",
    fullDesc: "Speed up the hiring lifecycle from candidate evaluation and salary pre-approval to formal offer letter signing without losing high-demand talent.",
    docs: [
      { name: "Curriculum Vitae (CV)", type: "PDF", note: "Candidate resume" },
      { name: "Hiring Requisition", type: "Corporate Form", note: "Job description & opening" },
      { name: "Compensation Proposal", type: "Confidential PDF", note: "Authorized salary band" }
    ],
    stations: [
      {
        step: 1,
        role: "HR Talent Specialist",
        name: "Shortlist Submission",
        action: "Uploads final shortlisted candidate profiles and psychometric assessments.",
        badge: "Initial Screening"
      },
      {
        step: 2,
        role: "Station 1: Hiring Manager",
        name: "Technical Assessment",
        action: "Reviews technical portfolio and greenlights candidates for final leadership interviews.",
        badge: "Technical Approval"
      },
      {
        step: 3,
        role: "Station 2: Executive Management",
        name: "Offer Authorization",
        action: "Affixes digital signature on the formal employment offer letter and benefits schedule.",
        badge: "Offer Signed"
      }
    ],
    closure: {
      type: "Signed Offer Letter & Onboarding Dossier",
      summary: "The candidate receives their verifiable digital offer letter with confirmed start date and benefits.",
      sla: "Typical SLA: < 12 Hours",
      benefit: "Secures top talent swiftly before competing corporate offers are presented."
    }
  },
  {
    id: "solicitud-vacaciones",
    category: "rrhh",
    categoryName: "Human Resources & Talent",
    code: "CASE 04",
    title: "Time-Off & Vacation Requests",
    shortDesc: "Official leave processing with timestamps and automated permanent archiving in the digital employee file.",
    fullDesc: "Clear and transparent leave approval preventing overlapping absences within critical teams while maintaining accurate payroll records.",
    docs: [
      { name: "Personnel Action Form", type: "PDF / Form", note: "Days requested" },
      { name: "Accrual Balance Report", type: "HR Summary", note: "Available days balance" }
    ],
    stations: [
      {
        step: 1,
        role: "Employee",
        name: "Leave Submission",
        action: "Selects desired dates and verifies available accrual balance in real time.",
        badge: "Submitted"
      },
      {
        step: 2,
        role: "Station 1: Team Supervisor",
        name: "Shift Coverage Review",
        action: "Confirms shift coverage among colleagues and approves the scheduled absence.",
        badge: "Approved"
      },
      {
        step: 3,
        role: "Station 2: Payroll & HR",
        name: "Payroll Registration",
        action: "Deducts leave balance in the master HR system and stamps the final personnel document.",
        badge: "HR Closure"
      }
    ],
    closure: {
      type: "Certified Time-Off Certificate",
      summary: "Both employee and supervisor receive the certified PDF for personal and company digital records.",
      sla: "Typical SLA: < 8 Hours",
      benefit: "Total transparency in leave balances and elimination of dispute-prone manual tracking."
    }
  },
  {
    id: "compra-suministros",
    category: "operaciones",
    categoryName: "Operations & General Services",
    code: "CASE 05",
    title: "Facility Supplies & Maintenance",
    shortDesc: "Consumable and repair authorization with budget pre-clearance and warehouse dispatch confirmation.",
    fullDesc: "Fast-track approval for office supplies, facility repairs, and technology peripherals to keep corporate offices running without disruption.",
    docs: [
      { name: "Supply Requisition Slip", type: "PDF / Form", note: "Itemized request details" },
      { name: "Service Estimate / Invoice", type: "PDF / Proforma", note: "For third-party repairs" }
    ],
    stations: [
      {
        step: 1,
        role: "Facility Lead",
        name: "Material Request",
        action: "Details required supplies or urgent maintenance service for company offices.",
        badge: "Ticket"
      },
      {
        step: 2,
        role: "Station 1: Operations Dept",
        name: "Inventory Check",
        action: "Checks whether items are in stock or dispatches purchase order to approved suppliers.",
        badge: "Inventory"
      },
      {
        step: 3,
        role: "Station 2: Warehouse Dispatch",
        name: "Fulfillment & Receipt",
        action: "The authorized requisition returns with QR verification to release items from the warehouse.",
        badge: "Logistics"
      }
    ],
    closure: {
      type: "Certified Work Order",
      summary: "Operations receives the stamped authorization with verification QR code for warehouse pickup.",
      sla: "Typical SLA: < 24 Hours",
      benefit: "Agile facility upkeep without operations stalled by approval delays."
    }
  }
];

export const useCasesIt: UseCaseItem[] = [
  {
    id: "compras-proveedores",
    category: "finanzas",
    categoryName: "Gestione Finanziaria e Acquisti",
    code: "CASO 01",
    title: "Acquisti o Pagamenti Fornitori",
    shortDesc: "Autorizzazione strutturata degli acquisti aziendali garantendo fattibilità tecnica e assegnazione del budget.",
    fullDesc: "Strutturazione del processo di autorizzazione per acquisti aziendali, convalidando la pertinenza tecnica e la disponibilità di budget prima dell'esecuzione dell'ordine per prevenire preventivi scaduti.",
    docs: [
      { name: "Modulo di Richiesta", type: "PDF / Modulo", note: "Compilato dal richiedente" },
      { name: "Preventivo del Fornitore", type: "PDF / Immagine", note: "Con validità e prezzi chiari" },
      { name: "Motivazione d'Acquisto", type: "Doc / Allegato", note: "Impatto operativo" }
    ],
    stations: [
      {
        step: 1,
        role: "Richiedente",
        name: "Caricamento Fascicolo",
        action: "Invia richiesta, preventivo del fornitore e motivazione in un unico pacchetto digitale.",
        badge: "Avviato"
      },
      {
        step: 2,
        role: "Stazione 1: Responsabile di Reparto",
        name: "Convalida Tecnica",
        action: "Verifica la necessità operativa e autorizza con firma digitale e timbro orario.",
        badge: "Timbro Digitale"
      },
      {
        step: 3,
        role: "Stazione 2: Direttore Finanziario",
        name: "Verifica del Budget",
        action: "Verifica la disponibilità sul capitolo di spesa e approva formalmente l'uscita aziendale.",
        badge: "Controllo Fiscale"
      },
      {
        step: 4,
        role: "Stazione 3: Ufficio Acquisti",
        name: "Emissione Ordine Ufficiale",
        action: "Verifica finale e invio dell'ordine ufficiale al fornitore basato sul PDF consolidato.",
        badge: "Approvazione Finale"
      }
    ],
    closure: {
      type: "PDF Consolidato con Timbro Crittografico",
      summary: "Il fornitore riceve l'ordine con tutte le firme integrate in un unico fascicolo digitale immutabile.",
      sla: "SLA Tipico: < 24 Ore",
      benefit: "Elimina acquisti fuori tempo e protegge da aumenti imprevisti di preventivo."
    }
  },
  {
    id: "viaticos-colaboradores",
    category: "finanzas",
    categoryName: "Gestione Finanziaria e Acquisti",
    code: "CASO 02",
    title: "Richiesta e Rimborso Trasferte",
    shortDesc: "Controllo preventivo delle spese di viaggio locali o internazionali con liquidazione contabile ordinata.",
    fullDesc: "Approvazione ordinata di spostamenti, alloggio e vitto prima del viaggio, con collegamento contabile automatico per la liquidazione senza documenti cartacei sparsi.",
    docs: [
      { name: "Richiesta Itinerario", type: "Modulo", note: "Date, destinazione e obiettivi" },
      { name: "Preventivo di Spesa", type: "Foglio di Calcolo / PDF", note: "Tariffe e rimborsi previsti" },
      { name: "Giustificativi / Fatture", type: "PDF / XML", note: "Per la fase di liquidazione" }
    ],
    stations: [
      {
        step: 1,
        role: "Collaboratore in Viaggio",
        name: "Proposta Itinerario",
        action: "Inserisce date, destinazione, motivo della visita e stima dei costi.",
        badge: "Bozza"
      },
      {
        step: 2,
        role: "Stazione 1: Responsabile Diretto",
        name: "Approvazione Missione",
        action: "Valuta la necessità operativa e timbra digitalmente il benestare al viaggio.",
        badge: "Autorizzato"
      },
      {
        step: 3,
        role: "Stazione 2: Amministrazione e Pagamenti",
        name: "Erogazione Anticipo",
        action: "Programma il bonifico o autorizza la carta aziendale in base alla politica di spesa.",
        badge: "Bonifico"
      },
      {
        step: 4,
        role: "Stazione 3: Revisione Contabile",
        name: "Liquidazione Finale Spese",
        action: "Verifica fatture e ricevute al rientro e chiude formalmente il rendiconto.",
        badge: "Chiusura Contabile"
      }
    ],
    closure: {
      type: "Fascicolo Contabile Certificato",
      summary: "Tutti i giustificativi, i voucher e le firme vengono uniti in un PDF pronto per l'ispezione fiscale.",
      sla: "SLA Tipico: < 48 Ore",
      benefit: "Zero sanzioni per ricevute smarrite e piena conformità nelle deduzioni fiscali."
    }
  },
  {
    id: "onboarding-candidatos",
    category: "rrhh",
    categoryName: "Risorse Umane e Talenti",
    code: "CASO 03",
    title: "Onboarding e Selezione del Personale",
    shortDesc: "Screening collaborativo e coordinamento delle offerte di assunzione tra responsabili di linea e Risorse Umane.",
    fullDesc: "Valutazione collaborativa e snella dei candidati tra responsabili di linea e Risorse Umane, con approvazione della proposta contrattuale e firma digitale dell'offerta.",
    docs: [
      { name: "Curriculum Vitae", type: "PDF", note: "Esperienza e referenze" },
      { name: "Griglia di Valutazione", type: "Modulo", note: "Competenze tecniche" },
      { name: "Lettera d'Offerta", type: "PDF", note: "Compenso e data d'ingresso" }
    ],
    stations: [
      {
        step: 1,
        role: "Talent Acquisition",
        name: "Screening Iniziale",
        action: "Carica il profilo del finalista e compila la sintesi del colloquio.",
        badge: "Candidato"
      },
      {
        step: 2,
        role: "Stazione 1: Hiring Manager",
        name: "Feedback Tecnico",
        action: "Valuta le competenze specifiche e approva l'avanzamento verso la proposta formale.",
        badge: "Idoneo"
      },
      {
        step: 3,
        role: "Stazione 2: Direzione Risorse Umane",
        name: "Autorizzazione Economica",
        action: "Convalida l'inquadramento retributivo ed emette la bozza contrattuale per la firma.",
        badge: "Contratto"
      }
    ],
    closure: {
      type: "Offerta Firmata Digitalmente",
      summary: "Il nuovo assunto riceve il documento approvato e firma digitalmente da qualsiasi dispositivo.",
      sla: "SLA Tipico: < 12 Ore",
      benefit: "Riduce il rischio di perdere i migliori talenti a causa della lentezza aziendale."
    }
  },
  {
    id: "solicitud-vacaciones",
    category: "rrhh",
    categoryName: "Risorse Umane e Talenti",
    code: "CASO 04",
    title: "Ferie e Permessi (Azione del Personale)",
    shortDesc: "Gestione di permessi e ferie con timbri orari e archiviazione automatica nel fascicolo del dipendente.",
    fullDesc: "Pianificazione trasparente delle assenze senza sovrapposizioni tra colleghi, con convalida automatica dei giorni residui e notifica immediata alle buste paga.",
    docs: [
      { name: "Richiesta di Ferie", type: "Modulo Digitale", note: "Giorni richiesti e saldo" },
      { name: "Piano di Sostituzione", type: "Testo / Allegato", note: "Passaggio consegne" }
    ],
    stations: [
      {
        step: 1,
        role: "Collaboratore",
        name: "Invio Richiesta",
        action: "Seleziona l'intervallo temporale e assegna il collega designato per le urgenze.",
        badge: "Richiesta"
      },
      {
        step: 2,
        role: "Stazione 1: Responsabile di Reparto",
        name: "Convalida Operativa",
        action: "Verifica che il turno o il progetto sia coperto e approva con timbro orario.",
        badge: "Approvato"
      },
      {
        step: 3,
        role: "Stazione 2: Amministrazione del Personale",
        name: "Registrazione Presenze",
        action: "Aggiorna il registro delle ferie e archivia il PDF nel fascicolo digitale del dipendente.",
        badge: "Archiviato"
      }
    ],
    closure: {
      type: "Notifica Ufficiale con Timbro di Data/Ora",
      summary: "Richiedente, manager e ufficio presenze ricevono la conferma con il saldo ferie aggiornato.",
      sla: "SLA Tipico: < 8 Ore",
      benefit: "Evita reclami sui giorni maturati ed elimina le richieste informali su chat."
    }
  },
  {
    id: "compra-suministros",
    category: "operaciones",
    categoryName: "Operazioni e Servizi Generali",
    code: "CASO 05",
    title: "Acquisto Forniture e Manutenzione",
    shortDesc: "Convalida di materiali e interventi sulle sedi aziendali con controllo budget e coordinamento con il magazzino.",
    fullDesc: "Tracciamento rapido delle richieste di cancelleria, manutenzione impianti o servizi generali per evitare che problemi strutturali paralizzino il lavoro degli uffici.",
    docs: [
      { name: "Richiesta Materiali", type: "Modulo", note: "Quantità, codici e urgenza" },
      { name: "Scheda Tecnica / Preventivo", type: "PDF / Immagine", note: "Per ricambi o servizi esterni" }
    ],
    stations: [
      {
        step: 1,
        role: "Responsabile Struttura",
        name: "Richiesta Materiali",
        action: "Specifica le forniture necessarie o l'intervento urgente per le sedi aziendali.",
        badge: "Ticket"
      },
      {
        step: 2,
        role: "Stazione 1: Direzione Operativa",
        name: "Controllo Giacenze",
        action: "Verifica se i beni sono a magazzino o invia l'ordine ai fornitori convenzionati.",
        badge: "Magazzino"
      },
      {
        step: 3,
        role: "Stazione 2: Ufficio Spedizioni",
        name: "Consegna e Ricezione",
        action: "Il documento autorizzato torna ai Servizi Generali per il ritiro dei materiali.",
        badge: "Logistica"
      }
    ],
    closure: {
      type: "Buono di Lavoro Certificato",
      summary: "I Servizi Generali ricevono l'autorizzazione timbrata con codice QR per il ritiro a magazzino.",
      sla: "SLA Tipico: < 24 Ore",
      benefit: "Manutenzione tempestiva senza strutture paralizzate da ritardi di firma."
    }
  }
];

export const useCasesPt: UseCaseItem[] = [
  {
    id: "compras-proveedores",
    category: "finanzas",
    categoryName: "Gestão Financeira e Compras",
    code: "CASO 01",
    title: "Compra ou Pagamento a Fornecedores",
    shortDesc: "Autorização estruturada de aquisições corporativas garantindo viabilidade técnica e dotação orçamentária.",
    fullDesc: "Estruturação do fluxo de autorização para aquisições corporativas, validando a pertinência técnica e a disponibilidade orçamentária antes de efetivar a compra para evitar cotações vencidas.",
    docs: [
      { name: "Formulário de Requisição", type: "PDF / Formulário", note: "Preenchido pelo solicitante" },
      { name: "Cotação do Fornecedor", type: "PDF / Imagem", note: "Com validade e preços definidos" },
      { name: "Justificativa da Compra", type: "Doc / Anexo", note: "Impacto operacional" }
    ],
    stations: [
      {
        step: 1,
        role: "Solicitante",
        name: "Envio do Processo",
        action: "Insere requisição, cotação e justificativa em um único pacote digital.",
        badge: "Iniciado"
      },
      {
        step: 2,
        role: "Estação 1: Gestor da Área",
        name: "Validação Técnica",
        action: "Avalia a necessidade operacional e autoriza com assinatura digital e carimbo de data/hora.",
        badge: "Carimbo Digital"
      },
      {
        step: 3,
        role: "Estação 2: Gerente Financeiro",
        name: "Disponibilidade de Verba",
        action: "Verifica a dotação orçamentária disponível e aprova formalmente a despesa corporativa.",
        badge: "Controle Fiscal"
      },
      {
        step: 4,
        role: "Estação 3: Depto. de Compras",
        name: "Emissão do Pedido Oficial",
        action: "Auditoria final e envio do pedido oficial ao fornecedor com base no PDF consolidado.",
        badge: "Aprovação Final"
      }
    ],
    closure: {
      type: "PDF Consolidado com Carimbo Criptográfico",
      summary: "O fornecedor recebe o pedido com todas as assinaturas integradas em um dossiê digital imutável.",
      sla: "SLA Típico: < 24 Horas",
      benefit: "Elimina compras atrasadas e protege contra aumentos repentinos de cotação."
    }
  },
  {
    id: "viaticos-colaboradores",
    category: "finanzas",
    categoryName: "Gestão Financeira e Compras",
    code: "CASO 02",
    title: "Solicitação e Adiantamento de Diárias",
    shortDesc: "Controle prévio de despesas de viagens a trabalho com prestação de contas organizada.",
    fullDesc: "Aprovação ordenada de deslocamentos, hospedagem e alimentação antes da viagem, com integração contábil automática para prestação de contas sem papéis perdidos.",
    docs: [
      { name: "Solicitação de Itinerário", type: "Formulário", note: "Datas, destino e objetivos" },
      { name: "Orçamento Estimado", type: "Planilha / PDF", note: "Tarifas de diárias aplicáveis" },
      { name: "Comprovantes / Notas Fiscais", type: "PDF / XML", note: "Para fase de prestação de contas" }
    ],
    stations: [
      {
        step: 1,
        role: "Colaborador Viajante",
        name: "Proposta de Itinerário",
        action: "Cadastra datas, destino, motivo da visita e estimativa de gastos.",
        badge: "Rascunho"
      },
      {
        step: 2,
        role: "Estação 1: Gestor Direto",
        name: "Aprovação da Viagem",
        action: "Analisa a justificativa da missão e carimba digitalmente a autorização.",
        badge: "Autorizado"
      },
      {
        step: 3,
        role: "Estação 2: Financeiro e Pagamentos",
        name: "Liberação do Adiantamento",
        action: "Agenda o pagamento ou libera o cartão corporativo conforme as políticas da empresa.",
        badge: "Pagamento"
      },
      {
        step: 4,
        role: "Estação 3: Controladoria Contábil",
        name: "Prestação de Contas Final",
        action: "Verifica notas e recibos anexados ao retorno e encerra formalmente o adiantamento.",
        badge: "Encerramento"
      }
    ],
    closure: {
      type: "Dossiê Contábil Certificado",
      summary: "Todos os comprovantes, vouchers e assinaturas são reunidos em um PDF pronto para auditoria.",
      sla: "SLA Típico: < 48 Horas",
      benefit: "Zero multas por notas perdidas e total conformidade fiscal perante a Receita."
    }
  },
  {
    id: "onboarding-candidatos",
    category: "rrhh",
    categoryName: "Recursos Humanos e Talentos",
    code: "CASO 03",
    title: "Onboarding e Contratação",
    shortDesc: "Triagem colaborativa ágil e aprovação de propostas de contratação entre gestores e RH.",
    fullDesc: "Avaliação ágil e transparente de currículos entre líderes de equipe e RH para agendar entrevistas e formalizar propostas salariais sem cadeias de e-mails.",
    docs: [
      { name: "Currículo do Candidato", type: "PDF", note: "Experiência e referências" },
      { name: "Ficha de Avaliação", type: "Formulário", note: "Competências técnicas" },
      { name: "Carta de Proposta", type: "PDF", note: "Salário, benefícios e data de início" }
    ],
    stations: [
      {
        step: 1,
        role: "Recrutamento & Seleção",
        name: "Triagem Inicial",
        action: "Insere o perfil do finalista e registra o parecer da entrevista inicial.",
        badge: "Candidato"
      },
      {
        step: 2,
        role: "Estação 1: Gestor da Vaga",
        name: "Avaliação Técnica",
        action: "Valida as habilidades práticas e aprova o envio da proposta formal.",
        badge: "Aprovado"
      },
      {
        step: 3,
        role: "Estação 2: Diretoria de RH",
        name: "Aprovação da Proposta",
        action: "Convalida a faixa salarial e emite a minuta contratual para assinatura.",
        badge: "Contrato"
      }
    ],
    closure: {
      type: "Proposta Assinada Digitalmente",
      summary: "O novo contratado recebe a minuta aprovada e assina digitalmente em qualquer dispositivo.",
      sla: "SLA Típico: < 12 Horas",
      benefit: "Reduz o risco de perder os melhores talentos pela demora na formalização."
    }
  },
  {
    id: "solicitud-vacaciones",
    category: "rrhh",
    categoryName: "Recursos Humanos e Talentos",
    code: "CASO 04",
    title: "Férias e Licenças (Ação de Pessoal)",
    shortDesc: "Tramitação de permissões e férias com carimbos de data/hora e arquivamento no prontuário digital.",
    fullDesc: "Planejamento transparente de ausências sem sobreposição de escalas, com validação de saldo de dias e notificação automática à folha de pagamento.",
    docs: [
      { name: "Solicitação de Férias", type: "Formulário Digital", note: "Período e saldo de dias" },
      { name: "Plano de Cobertura", type: "Texto / Anexo", note: "Alinhamento com substituto" }
    ],
    stations: [
      {
        step: 1,
        role: "Colaborador",
        name: "Envio do Pedido",
        action: "Seleciona o período desejado e indica o colega que dará cobertura às urgências.",
        badge: "Solicitação"
      },
      {
        step: 2,
        role: "Estação 1: Gestor Imediato",
        name: "Validação da Escala",
        action: "Garante que o setor não fique desfalcado e aprova com carimbo de data/hora.",
        badge: "Aprovado"
      },
      {
        step: 3,
        role: "Estação 2: Departamento Pessoal",
        name: "Lançamento em Folha",
        action: "Atualiza o saldo de férias e arquiva o PDF consolidado no prontuário do colaborador.",
        badge: "Arquivado"
      }
    ],
    closure: {
      type: "Comprovante Oficial com Carimbo de Data/Hora",
      summary: "Solicitante, gestor e DP recebem o comprovante com o saldo de férias atualizado.",
      sla: "SLA Típico: < 8 Horas",
      benefit: "Evita contestações trabalhistas e elimina pedidos informais via mensagens."
    }
  },
  {
    id: "compra-suministros",
    category: "operaciones",
    categoryName: "Operações e Serviços Gerais",
    code: "CASO 05",
    title: "Aquisição de Suprimentos",
    shortDesc: "Validação de insumos e manutenção predial corporativa com verificação orçamentária e almoxarifado.",
    fullDesc: "Atendimento ágil de solicitações de papelaria, manutenção de instalações e serviços prediais para evitar que problemas físicos prejudiquem a rotina dos escritórios.",
    docs: [
      { name: "Requisição de Materiais", type: "Formulário", note: "Quantidades, códigos e urgência" },
      { name: "Especificação Técnica / Orçamento", type: "PDF / Imagem", note: "Para serviços ou peças externas" }
    ],
    stations: [
      {
        step: 1,
        role: "Responsável Predial",
        name: "Solicitação de Materiais",
        action: "Relaciona os suprimentos necessários ou o serviço de manutenção urgente para as sedes.",
        badge: "Chamado"
      },
      {
        step: 2,
        role: "Estação 1: Gestão Operacional",
        name: "Checagem de Estoque",
        action: "Verifica se há itens no estoque central ou encaminha compra aos fornecedores homologados.",
        badge: "Estoque"
      },
      {
        step: 3,
        role: "Estação 2: Almoxarifado / Expedição",
        name: "Entrega e Recebimento",
        action: "O documento autorizado retorna a Serviços Gerais com verificação para retirada dos itens.",
        badge: "Logística"
      }
    ],
    closure: {
      type: "Ordem de Serviço Certificada",
      summary: "Serviços Gerais recebe o despacho carimbado com código QR para retirada no almoxarifado.",
      sla: "SLA Típico: < 24 Horas",
      benefit: "Manutenção rápida sem instalações paradas por atrasos burocráticos de assinatura."
    }
  }
];

export const useCasesByLang: Record<string, UseCaseItem[]> = {
  es: useCasesEs,
  en: useCasesEn,
  it: useCasesIt,
  pt: useCasesPt
};
