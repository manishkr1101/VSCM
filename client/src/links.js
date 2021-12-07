import AddRole from "./pages/admin/add-role";
import VaccineLegitimacy from "./pages/vaccine-legitimacy";
import Blank from "./pages/blank"
import Feedback from "./pages/feedback";
import ValidateBeneficiary from "./pages/doctor/validate-beneficiary";
import RegisterVaccineLots from "./pages/producer/register-vaccine-lots";
import UserHome from "./pages/user-home";
import VaccineProducerHome from "./pages/producer/vaccine-producer-home";
import VaccineRegistration from "./pages/vaccine-registration";

export default  {
    USER: [
        {
            label: 'Home',
            href: '/',
            Component: UserHome
        },
        {
            label: 'Registration',
            href: '/vaccine-registration',
            Component: VaccineRegistration
        },
        {
            label: 'Feedback',
            href: '/user-feedback',
            Component: Feedback
        },
        {
            label: 'Check Vaccine Legitemecy',
            href: '/validate-vaccine',
            Component: VaccineLegitimacy
        }
    ],
    DOCTOR: [
        {
            label: 'Home',
            href: '/',
            Component: Blank
        },
        {
            label: 'Validate Beneficiary',
            href: '/validate-beneficiary',
            Component: ValidateBeneficiary
        },
        {
            label: 'Check Vaccine Legitemecy',
            href: '/validate-vaccine',
            Component: VaccineLegitimacy
        }
    ],
    ADMIN: [
        {
            label: 'Home',
            href: '/',
            Component: AddRole
        }
    ],
    GOVT_AUTHORITY: [
        {
            label: 'Vaccinate',
            href: '/vaccinate',
            Component: Blank
        },
        {
            label: 'Validate Beneficiary',
            href: '/validate-beneficiary',
            Component: ValidateBeneficiary
        },
        {
            label: 'Check Vaccine Legitemecy',
            href: '/validate-vaccine',
            Component: VaccineLegitimacy
        }
    ],
    PRODUCER: [
        {
            label: 'Home',
            href: '/',
            Component: VaccineProducerHome
        },
        {
            label: 'Register Vaccine Lots',
            href: '/register-vaccine-lots',
            Component: RegisterVaccineLots
        },
        {
            label: 'Check Vaccine Legitemecy',
            href: '/validate-vaccine',
            Component: VaccineLegitimacy
        }
    ]
}