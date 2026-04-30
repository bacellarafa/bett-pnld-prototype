import svgPaths from "./svg-klnkamzvkf";

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[24px] items-start left-[28px] px-[8px] py-[4px] rounded-[10px] top-[12px]" data-name="Container">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Atividade</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[7px] size-[16px] top-[7px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #FF505F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] border border-[#ff505f] border-solid left-[427px] rounded-[10px] size-[32px] top-[12px]" data-name="Button">
      <Frame />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[228px] size-[48px] top-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.9">
          <path d={svgPaths.p36afa200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p33545600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M20 18H16" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 26H16" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 34H16" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#46b2ff] h-[128px] left-px top-px w-[499px]" data-name="Container">
      <Container1 />
      <Button />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[184px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66797 9.33333L14.0013 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#46b2ff] h-[44px] left-[33px] rounded-[14px] top-[209px] w-[427px]" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[225px] not-italic text-[16px] text-center text-white top-[9px] whitespace-nowrap">Abrir</p>
    </div>
  );
}

function MaterialCard() {
  return (
    <div className="bg-white col-2 h-[283px] relative rounded-[16px] row-1 shrink-0 w-[500px]" data-name="MaterialCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Button1 />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[31px] not-italic text-[#666] text-[14px] top-[182.19px] whitespace-nowrap">Matemática</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[373px] not-italic text-[#666] text-[14px] top-[182.19px] whitespace-nowrap">23 Dez, 2025</p>
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[25.2px] left-[31px] not-italic text-[#0f172b] text-[18px] top-[149px] whitespace-nowrap">Atividade de Frações - 3º Ano</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[241px] size-[48px] top-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d="M16.0031 4.00078V12.0008" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M31.9969 4.00078V12.0008" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p29aded00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M6 19.9992H42" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[24px] items-start left-[12px] px-[8px] py-[4px] rounded-[10px] top-[12px]" data-name="Container">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Plano de Aula</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[7px] size-[16px] top-[7px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #FF505F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] border border-[#ff505f] border-solid left-[438px] rounded-[10px] size-[32px] top-[12px]" data-name="Button">
      <Frame1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#be82ff] h-[128px] left-px top-px w-[502px]" data-name="Container">
      <Icon2 />
      <Container3 />
      <Button2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[184px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66797 9.33333L14.0013 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#46b2ff] h-[44px] left-[44px] rounded-[14px] top-[210.19px] w-[427px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[225px] not-italic text-[16px] text-center text-white top-[9px] whitespace-nowrap">Abrir</p>
    </div>
  );
}

function MaterialCard1() {
  return (
    <div className="bg-white col-1 h-[283px] justify-self-start relative rounded-[16px] row-1 shrink-0 w-[500px]" data-name="MaterialCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Button3 />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[45px] not-italic text-[#666] text-[14px] top-[177.19px] whitespace-nowrap">Ciências</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[387px] not-italic text-[#666] text-[14px] top-[177.19px] whitespace-nowrap">22 Dez, 2025</p>
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[25.2px] left-[45px] not-italic text-[#0f172b] text-[18px] top-[144px] whitespace-nowrap">Ciclo da Água - 1º Ano</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[24px] items-start left-[32px] px-[8px] py-[4px] rounded-[10px] top-[12px]" data-name="Container">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Atividade Inclusiva</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[7px] size-[16px] top-[7px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #FF505F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] border border-[#ff505f] border-solid left-[427px] rounded-[10px] size-[32px] top-[12px]" data-name="Button">
      <Frame2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[228px] size-[48px] top-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.9">
          <path d={svgPaths.p4e0cf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#63dcd0] h-[128px] left-px top-px w-[499px]" data-name="Container">
      <Container5 />
      <Button4 />
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[184px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66797 9.33333L14.0013 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#46b2ff] h-[44px] left-[34px] rounded-[14px] top-[210.19px] w-[427px]" data-name="Button">
      <Icon5 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[225px] not-italic text-[16px] text-center text-white top-[9px] whitespace-nowrap">Abrir</p>
    </div>
  );
}

function MaterialCard2() {
  return (
    <div className="bg-white col-2 h-[283px] relative rounded-[16px] row-3 shrink-0 w-[500px]" data-name="MaterialCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
        <Button5 />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[33px] not-italic text-[#666] text-[14px] top-[182.19px] whitespace-nowrap">Geral</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[375px] not-italic text-[#666] text-[14px] top-[182.19px] whitespace-nowrap">23 Dez, 2025</p>
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[25.2px] left-[33px] not-italic text-[#0f172b] text-[18px] top-[149px] whitespace-nowrap">Adaptações para João - TDAH</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[24px] items-start left-[39px] px-[8px] py-[4px] rounded-[10px] top-[12px]" data-name="Container">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Atividade</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[7px] size-[16px] top-[7px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #FF505F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] border border-[#ff505f] border-solid left-[447px] rounded-[10px] size-[32px] top-[12px]" data-name="Button">
      <Frame3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[242px] size-[48px] top-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.9">
          <path d={svgPaths.p36afa200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p33545600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M20 18H16" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 26H16" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 34H16" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#46b2ff] h-[128px] left-px top-px w-[499px]" data-name="Container">
      <Container7 />
      <Button6 />
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[184px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66797 9.33333L14.0013 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#46b2ff] h-[44px] left-[53px] rounded-[14px] top-[210.19px] w-[427px]" data-name="Button">
      <Icon7 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[225px] not-italic text-[16px] text-center text-white top-[9px] whitespace-nowrap">Abrir</p>
    </div>
  );
}

function MaterialCard3() {
  return (
    <div className="bg-white col-1 h-[283px] justify-self-start relative rounded-[16px] row-2 shrink-0 w-[500px]" data-name="MaterialCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
        <Button7 />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[53px] not-italic text-[#666] text-[14px] top-[176.19px] whitespace-nowrap">Português</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[387px] not-italic text-[#666] text-[14px] top-[176.19px] whitespace-nowrap">20 Dez, 2025</p>
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[25.2px] left-[53px] not-italic text-[#0f172b] text-[18px] top-[143px] whitespace-nowrap">Exercícios de Gramática - 2º Ano</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[24px] items-start left-[28px] px-[8px] py-[4px] rounded-[10px] top-[12px]" data-name="Container">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Atividade</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[7px] size-[16px] top-[7px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #FF505F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] border border-[#ff505f] border-solid left-[427px] rounded-[10px] size-[32px] top-[12px]" data-name="Button">
      <Frame4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[228px] size-[48px] top-[41px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.9">
          <path d={svgPaths.p36afa200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p33545600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M20 18H16" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 26H16" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 34H16" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#46b2ff] h-[128px] left-px top-px w-[499px]" data-name="Container">
      <Container9 />
      <Button8 />
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[184px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66797 9.33333L14.0013 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#46b2ff] h-[44px] left-[37px] rounded-[14px] top-[210.19px] w-[427px]" data-name="Button">
      <Icon9 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[225px] not-italic text-[16px] text-center text-white top-[9px] whitespace-nowrap">Abrir</p>
    </div>
  );
}

function MaterialCard4() {
  return (
    <div className="bg-white col-1 h-[283px] relative rounded-[16px] row-3 shrink-0 w-[500px]" data-name="MaterialCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container8 />
        <Button9 />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[37px] not-italic text-[#666] text-[14px] top-[179.19px] whitespace-nowrap">Matemática</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[379px] not-italic text-[#666] text-[14px] top-[179.19px] whitespace-nowrap">18 Dez, 2025</p>
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[25.2px] left-[37px] not-italic text-[#0f172b] text-[18px] top-[146px] whitespace-nowrap">Atividade de Geometria - 3º Ano</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[241px] size-[48px] top-[44px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d="M16.0031 4.00078V12.0008" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M31.9969 4.00078V12.0008" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p29aded00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M6 19.9992H42" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex h-[24px] items-start left-[48px] px-[8px] py-[4px] rounded-[10px] top-[12px]" data-name="Container">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">Plano de Aula</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[7px] size-[16px] top-[7px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #FF505F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] border border-[#ff505f] border-solid left-[439px] rounded-[10px] size-[32px] top-[12px]" data-name="Button">
      <Frame5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#be82ff] h-[128px] left-px top-px w-[499px]" data-name="Container">
      <Icon10 />
      <Container11 />
      <Button10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[184px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66797 9.33333L14.0013 2" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#46b2ff] h-[44px] left-[34px] rounded-[14px] top-[210.19px] w-[427px]" data-name="Button">
      <Icon11 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[225px] not-italic text-[16px] text-center text-white top-[9px] whitespace-nowrap">Abrir</p>
    </div>
  );
}

function MaterialCard5() {
  return (
    <div className="bg-white col-2 h-[283px] justify-self-start relative rounded-[16px] row-2 shrink-0 w-[500px]" data-name="MaterialCard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
        <Button11 />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[54px] not-italic text-[#666] text-[14px] top-[180.19px] whitespace-nowrap">História</p>
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[396px] not-italic text-[#666] text-[14px] top-[180.19px] whitespace-nowrap">19 Dez, 2025</p>
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[25.2px] left-[54px] not-italic text-[#0f172b] text-[18px] top-[147px] whitespace-nowrap">Revolução Industrial - 3º Ano</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute gap-x-[36px] gap-y-[32px] grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] inline-grid left-[329px] top-[367px]">
      <MaterialCard />
      <MaterialCard1 />
      <MaterialCard2 />
      <MaterialCard3 />
      <MaterialCard4 />
      <MaterialCard5 />
    </div>
  );
}

function Camada() {
  return (
    <div className="h-[34px] relative shrink-0 w-[128px]" data-name="Camada_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 34">
        <g clipPath="url(#clip0_7_557)" id="Camada_1">
          <path d={svgPaths.pe16d200} fill="var(--fill-0, #46B2FF)" id="Vector" />
          <path d={svgPaths.pe125600} fill="var(--fill-0, #1E35B8)" id="Vector_2" />
          <path d={svgPaths.p28138880} fill="var(--fill-0, #1E35B8)" id="Vector_3" />
          <path d={svgPaths.p3e6f7000} fill="var(--fill-0, #46B2FF)" id="Vector_4" />
          <path d={svgPaths.p1aca0100} fill="var(--fill-0, #1E35B8)" id="Vector_5" />
          <g id="Group">
            <path d={svgPaths.p3e4b9d00} fill="var(--fill-0, #1E35B8)" id="Vector_6" />
            <path d={svgPaths.p1a946100} fill="var(--fill-0, #1E35B8)" id="Vector_7" />
            <path d={svgPaths.p3f50cc80} fill="var(--fill-0, #1E35B8)" id="Vector_8" />
            <path d={svgPaths.pb53cb00} fill="var(--fill-0, #1E35B8)" id="Vector_9" />
            <path d={svgPaths.p1b3e6000} fill="var(--fill-0, #1E35B8)" id="Vector_10" />
            <path d={svgPaths.p11081400} fill="var(--fill-0, #1E35B8)" id="Vector_11" />
            <path d={svgPaths.pc1dbc00} fill="var(--fill-0, #1E35B8)" id="Vector_12" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_7_557">
            <rect fill="white" height="34" width="128" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[70px] items-start left-0 pl-[16px] pr-[147px] py-[18px] top-0 w-[291px]">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Camada />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p21a7e80} id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[37.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[19px] not-italic text-[#666] text-[16px] text-center top-[-1px] whitespace-nowrap">Início</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.25)] flex gap-[12px] h-[48px] items-center pl-[16px] relative rounded-[14px] shrink-0 w-[268px]" data-name="Button">
      <Icon12 />
      <Text />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.9">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.25)] flex gap-[12px] h-[48px] items-center pl-[16px] relative rounded-[14px] shrink-0 w-[268px]" data-name="Button">
      <Icon13 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#666] text-[16px] text-center whitespace-nowrap">Criar Atividade</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p19adb900} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[151px]" data-name="Text">
      <p className="font-['Poppins:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#666] text-[16px] text-center whitespace-nowrap">Atividade Inclusiva</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.923px] py-[2.923px] relative rounded-[5.538px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1a73e8] border-[0.923px] border-solid inset-0 pointer-events-none rounded-[5.538px]" />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18.462px] not-italic relative shrink-0 text-[#1a73e8] text-[11.077px] whitespace-nowrap">Novo</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text1 />
        <Container12 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.25)] flex gap-[12px] h-[44px] items-center pl-[16px] relative rounded-[14px] shrink-0 w-[268px]" data-name="Button">
      <Icon14 />
      <Frame26 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66699 1.66699V5.00033" id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.333 1.66699V5.00033" id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1f6ff800} id="Vector_3" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33301H17.5" id="Vector_4" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#666] text-[16px] text-center whitespace-nowrap">Planejar Aulas</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.25)] flex gap-[12px] h-[44px] items-center pl-[16px] relative rounded-[14px] shrink-0 w-[268px]" data-name="Button">
      <Icon15 />
      <Text2 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M13.333 5L16.6663 16.6667" id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V16.6667" id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66699 6.66699V16.667" id="Vector_3" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33301 3.33301V16.6663" id="Vector_4" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#666] text-[16px] text-center whitespace-nowrap">Biblioteca</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.25)] flex gap-[12px] h-[44px] items-center pl-[16px] relative rounded-[14px] shrink-0 w-[268px]" data-name="Button">
      <Icon16 />
      <Text3 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p28ddec80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return <div className="h-[24px] shrink-0 w-[37.828px]" data-name="Text" />;
}

function Button17() {
  return (
    <div className="bg-[#46b2ff] content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex gap-[12px] h-[48px] items-center pl-[16px] relative rounded-[14px] shrink-0 w-[268px]" data-name="Button">
      <Icon17 />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Meus Materiais</p>
      <Text4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#46b2ff] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">P</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[22.391px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[22.4px] left-0 not-italic text-[#0f172b] text-[16px] top-[-1px] whitespace-nowrap">Professor(a)</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33438 1.33359V4.00026" id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.6656 1.33359V4.00026" id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p10b05980} id="Vector_3" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2 6.66641H14" id="Vector_4" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon18 />
      <p className="font-['Verdana:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">3/5</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.9">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon19 />
      <p className="font-['Verdana:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">3/5</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Verdana:Regular',sans-serif] leading-[19.2px] left-0 not-italic text-[#666] text-[12px] top-[-1px] whitespace-nowrap">Ver perfil</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] h-[41.578px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Frame23 />
        <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[161px]" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_-0.31%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 1">
                <path d="M0.5 0.5H161.5" id="Vector 1" stroke="var(--stroke-0, #E2E8F0)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f5f5f5] h-[129px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[25px] px-[12px] relative size-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-white content-stretch flex h-[28px] items-start px-[12px] py-[4px] relative rounded-[10px] shrink-0 w-[50px]" data-name="Button">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[14px] text-center whitespace-nowrap">Sair</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[44px] items-end px-[14px] py-[8px] relative rounded-[12px] shrink-0 w-[78px]">
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Button18 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container14 />
      <Frame20 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[242px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
        <Frame24 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[972px] h-[1516px] items-center left-0 top-[80px] w-[290px]">
      <Frame8 />
      <Container13 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white border-[#e2e8f0] border-r border-solid h-[1595px] left-0 shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[291px]" data-name="Sidebar">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Sidebar />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2a2e5930} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#0032be] content-stretch flex items-center justify-center relative rounded-[14px] shrink-0 size-[40px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[399px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[32px] w-full">Meus Materiais</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[449px]">
      <Container17 />
      <Frame6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[52px] items-start justify-between relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white h-[52px] relative rounded-[14px] shrink-0 w-[326px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[19.2px] left-[17px] not-italic text-[14px] text-black top-[16px] whitespace-nowrap">Total de Materiais</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[19.2px] left-[294px] not-italic text-[#666] text-[20px] top-[16px] whitespace-nowrap">6</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[52px] relative rounded-[14px] shrink-0 w-[325px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[19.2px] left-[17px] not-italic text-[14px] text-black top-[16px] whitespace-nowrap">Criados este mês</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[19.2px] left-[291px] not-italic text-[#666] text-[20px] top-[16px] whitespace-nowrap">12</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[52px] relative rounded-[14px] shrink-0 w-[326px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(102,102,102,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[19.2px] left-[17px] not-italic text-[14px] text-black top-[16px] whitespace-nowrap">Compartilhados</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[19.2px] left-[295px] not-italic text-[#666] text-[20px] top-[16px] whitespace-nowrap">8</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[46px] items-center relative shrink-0 w-[1069px]">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[8px] top-0 w-[934px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[48px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#666] text-[14px] whitespace-nowrap">Buscar conteúdo</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.4993 17.5L13.916 13.9166" id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[36px] relative rounded-[4px] shrink-0 w-[970px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c2c2c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Input />
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14.0007 2.66663H9.33398" id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 2.66667H2" id="Vector_2" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 8H8" id="Vector_3" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8H2" id="Vector_4" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.9993 13.3334H10.666" id="Vector_5" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333H2" id="Vector_6" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33398 1.33337V4.00004" id="Vector_7" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33398 6.66663V9.33329" id="Vector_8" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.666 12V14.6667" id="Vector_9" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[14px] h-[37px] items-center justify-center relative rounded-[5px] shrink-0 w-[82px]">
      <div aria-hidden="true" className="absolute border border-[#c2c2c2] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Icon22 />
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#666] text-[14px] text-center whitespace-nowrap">Filtros</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[17px] h-[37px] items-end relative shrink-0 w-full">
      <Container21 />
      <Frame13 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[183.25px]" data-name="Paragraph">
      <p className="font-['Poppins:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[0px] whitespace-nowrap">
        <span className="leading-[20px] text-[14px]">6</span>
        <span className="font-['Poppins:Regular',sans-serif] leading-[20px] text-[#4a5565] text-[14px]">{` de `}</span>
        <span className="leading-[20px] text-[14px]">6</span>
        <span className="font-['Poppins:Regular',sans-serif] leading-[20px] text-[#4a5565] text-[14px]">{` itens encontrados`}</span>
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Ordenar por:</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.125px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Mais recentes</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-w-px relative rounded-[8px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon23 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-[256.391px]" data-name="Container">
      <Text5 />
      <PrimitiveButton />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full">
      <Paragraph2 />
      <Container22 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[29px] items-start left-[329px] top-[69px] w-[1069.391px]">
      <Frame12 />
      <Frame18 />
      <Frame15 />
      <Frame14 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center justify-center opacity-50 px-[11px] py-px relative rounded-[8px] shrink-0 w-[38px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon24 />
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#46b2ff] content-stretch flex h-[32px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0 w-[37.875px]" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">01</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[43.063px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">02</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[11px] py-px relative rounded-[8px] shrink-0 w-[38px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon25 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full">
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[765px] p-[8px] top-[1312px] w-[196.938px]">
      <Frame16 />
    </div>
  );
}

export default function MeusMateriais() {
  return (
    <div className="bg-white relative size-full" data-name="Meus materiais">
      <Frame25 />
      <Group />
      <Frame17 />
      <Frame19 />
    </div>
  );
}